import express from "express";
import { createServer as createViteServer } from "vite";
import Database from "better-sqlite3";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const db = new Database("database.db");

// Initialize Database
db.exec(`
  CREATE TABLE IF NOT EXISTS properties (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    location TEXT,
    price TEXT,
    type TEXT,
    beds INTEGER,
    baths INTEGER,
    area TEXT,
    image TEXT
  );

  CREATE TABLE IF NOT EXISTS testimonials (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    role TEXT,
    content TEXT,
    avatar TEXT
  );
`);

// Seed data if empty
const propertyCount = db.prepare("SELECT count(*) as count FROM properties").get() as { count: number };
if (propertyCount.count === 0) {
  const insertProperty = db.prepare("INSERT INTO properties (title, location, price, type, beds, baths, area, image) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
  insertProperty.run("Moradia T3 - Condomínio Boa Vida", "Talatona, Luanda", "450.000.000 Kz", "Moradia", 3, 3, "280m²", "https://picsum.photos/seed/boavida/800/600");
  insertProperty.run("Apartamento T3 - Condomínio Austin", "Camama, Luanda", "180.000.000 Kz", "Apartamento", 3, 2, "160m²", "https://picsum.photos/seed/austin/800/600");
  insertProperty.run("Apartamento T3 - Talatona Plaza", "Talatona, Luanda", "250.000.000 Kz", "Apartamento", 3, 3, "190m²", "https://picsum.photos/seed/plaza/800/600");
}

const testimonialCount = db.prepare("SELECT count(*) as count FROM testimonials").get() as { count: number };
if (testimonialCount.count === 0) {
  const insertTestimonial = db.prepare("INSERT INTO testimonials (name, role, content, avatar) VALUES (?, ?, ?, ?)");
  insertTestimonial.run("Mateus Alfredo", "Cliente Satisfeito", "A Luanda Prime Imóveis encontrou exatamente o que eu procurava no Camama. O atendimento foi excelente e muito profissional.", "https://picsum.photos/seed/mateus/100/100");
  insertTestimonial.run("Eunice Kiala", "Proprietária", "Vendi a minha moradia no Talatona em tempo recorde. A equipa é muito séria e conhece bem o mercado de Luanda.", "https://picsum.photos/seed/eunice/100/100");
  insertTestimonial.run("Domingos Neto", "Investidor", "Melhor imobiliária para quem busca segurança e transparência em Angola. Recomendo vivamente os seus serviços.", "https://picsum.photos/seed/domingos/100/100");
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.get("/api/properties", (req, res) => {
    const properties = db.prepare("SELECT * FROM properties").all();
    res.json(properties);
  });

  app.post("/api/properties", (req, res) => {
    const { title, location, price, type, beds, baths, area, image } = req.body;
    const result = db.prepare("INSERT INTO properties (title, location, price, type, beds, baths, area, image) VALUES (?, ?, ?, ?, ?, ?, ?, ?)").run(title, location, price, type, beds, baths, area, image);
    res.json({ id: result.lastInsertRowid });
  });

  app.put("/api/properties/:id", (req, res) => {
    const { id } = req.params;
    const { title, location, price, type, beds, baths, area, image } = req.body;
    db.prepare("UPDATE properties SET title = ?, location = ?, price = ?, type = ?, beds = ?, baths = ?, area = ?, image = ? WHERE id = ?").run(title, location, price, type, beds, baths, area, image, id);
    res.json({ success: true });
  });

  app.delete("/api/properties/:id", (req, res) => {
    const { id } = req.params;
    db.prepare("DELETE FROM properties WHERE id = ?").run(id);
    res.json({ success: true });
  });

  app.get("/api/testimonials", (req, res) => {
    const testimonials = db.prepare("SELECT * FROM testimonials").all();
    res.json(testimonials);
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "dist", "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
