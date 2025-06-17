import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import SlotViewer from '../../components/SlotViewer'; // Adjust path if needed
import { fetchCarpenters } from '../../service/carpenter.service';

interface Carpenter {
    id: number;
    name: string;
    description: string;
}


const Carpenters: React.FC = () => {
    const { data, isLoading, error } = useQuery<Carpenter[]>({
        queryKey: ['carpenters'],
        queryFn: fetchCarpenters,
    });

    const [selectedCarpenter, setSelectedCarpenter] = useState<Carpenter | null>(null);

    if (isLoading) return <div className="text-center mt-10">Loading carpenters...</div>;
    if (error) return <div className="text-red-500 text-center mt-10">Error loading data</div>;

    return (
        <div className="min-h-screen bg-gradient-to-tr from-blue-50 to-blue-200 p-6">
            <h1 className="text-3xl font-bold text-blue-800 mb-6 text-center">Available Carpenters</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data?.map((carpenter) => (
                    <div key={carpenter.id} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
                        <div className="flex items-center gap-4 mb-4">
                            <img
                                src={`https://i.pravatar.cc/150?u=${carpenter.id}`}
                                alt={carpenter.name}
                                className="w-16 h-16 rounded-full object-cover border"
                            />
                            <div>
                                <h2 className="text-lg font-semibold text-gray-800">{carpenter.name}</h2>
                                <p className="text-sm text-gray-600">{carpenter.description}</p>
                            </div>
                        </div>
                        <button
                            className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                            onClick={() => setSelectedCarpenter(carpenter)}
                        >
                            View Available Slots
                        </button>
                    </div>
                ))}
            </div>

            {selectedCarpenter && (
                <SlotViewer
                    carpenter={selectedCarpenter}
                    onClose={() => setSelectedCarpenter(null)}
                />
            )}
        </div>
    );
};

export default Carpenters;
