import React, { useState, useEffect } from 'react';
import { api } from '../services/api';
import { Property } from '../constants';
import { Plus, Trash2, Edit2, X, Save } from 'lucide-react';

export default function AdminPanel({ onBack }: { onBack: () => void }) {
  const [properties, setProperties] = useState<Property[]>([]);
  const [editing, setEditing] = useState<Partial<Property> | null>(null);

  useEffect(() => {
    loadProperties();
  }, []);

  const loadProperties = async () => {
    const data = await api.getProperties();
    setProperties(data);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editing) return;
    await api.saveProperty(editing);
    setEditing(null);
    loadProperties();
  };

  const handleDelete = async (id: number) => {
    if (confirm('Tem certeza que deseja excluir este imóvel?')) {
      await api.deleteProperty(id);
      loadProperties();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-display font-bold text-primary text-primary">Painel de Administração</h1>
          <div className="flex gap-4">
            <button
              onClick={() => setEditing({ title: '', location: '', price: '', type: 'Apartamento', area: '', image: 'https://picsum.photos/seed/new/800/600' })}
              className="bg-accent text-primary px-6 py-2 rounded-lg font-bold flex items-center gap-2"
            >
              <Plus size={20} /> Novo Imóvel
            </button>
            <button onClick={onBack} className="bg-primary text-white px-6 py-2 rounded-lg font-bold">
              Voltar ao Site
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-primary text-white">
              <tr>
                <th className="p-4">Título</th>
                <th className="p-4">Localização</th>
                <th className="p-4">Preço</th>
                <th className="p-4">Tipo</th>
                <th className="p-4">Ações</th>
              </tr>
            </thead>
            <tbody>
              {properties.map((p) => (
                <tr key={p.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="p-4 font-bold">{p.title}</td>
                  <td className="p-4 text-gray-600">{p.location}</td>
                  <td className="p-4 text-accent font-bold">{p.price}</td>
                  <td className="p-4">{p.type}</td>
                  <td className="p-4">
                    <div className="flex gap-2">
                      <button onClick={() => setEditing(p)} className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                        <Edit2 size={18} />
                      </button>
                      <button onClick={() => handleDelete(p.id)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {editing && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-[100]">
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-display font-bold">{editing.id ? 'Editar Imóvel' : 'Novo Imóvel'}</h2>
              <button onClick={() => setEditing(null)}><X /></button>
            </div>
            <form onSubmit={handleSave} className="space-y-4">
              <div>
                <label className="block text-sm font-bold mb-1">Título</label>
                <input
                  required
                  value={editing.title}
                  onChange={e => setEditing({ ...editing, title: e.target.value })}
                  className="w-full border rounded-lg p-2"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold mb-1">Localização</label>
                  <input
                    required
                    value={editing.location}
                    onChange={e => setEditing({ ...editing, location: e.target.value })}
                    className="w-full border rounded-lg p-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-1">Preço</label>
                  <input
                    required
                    value={editing.price}
                    onChange={e => setEditing({ ...editing, price: e.target.value })}
                    className="w-full border rounded-lg p-2"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold mb-1">Tipo</label>
                  <select
                    value={editing.type}
                    onChange={e => setEditing({ ...editing, type: e.target.value as any })}
                    className="w-full border rounded-lg p-2"
                  >
                    <option>Apartamento</option>
                    <option>Moradia</option>
                    <option>Escritório</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold mb-1">Área</label>
                  <input
                    value={editing.area}
                    onChange={e => setEditing({ ...editing, area: e.target.value })}
                    className="w-full border rounded-lg p-2"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold mb-1">Quartos</label>
                  <input
                    type="number"
                    value={editing.beds || ''}
                    onChange={e => setEditing({ ...editing, beds: parseInt(e.target.value) })}
                    className="w-full border rounded-lg p-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-1">Casas de Banho</label>
                  <input
                    type="number"
                    value={editing.baths || ''}
                    onChange={e => setEditing({ ...editing, baths: parseInt(e.target.value) })}
                    className="w-full border rounded-lg p-2"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold mb-1">URL da Imagem</label>
                <input
                  value={editing.image}
                  onChange={e => setEditing({ ...editing, image: e.target.value })}
                  className="w-full border rounded-lg p-2"
                />
              </div>
              <button type="submit" className="w-full bg-primary text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2">
                <Save size={20} /> Salvar Alterações
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
