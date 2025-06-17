import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import SlotViewer from '../../components/SlotViewer';
import { fetchCarpenters } from '../../service/carpenter.service';
import Header from '../../components/Header';

interface Carpenter {
    id: number;
    name: string;
    description: string; // Comma-separated specialties
    rating?: number;
    experience?: number;
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
        <>
            <Header />
            <div className="min-h-screen bg-gray-50 py-8 px-4">
                <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 text-center">
                    Choose Your Carpenter
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {data?.map((carpenter) => (
                        <div
                            key={carpenter.id}
                            onClick={() => setSelectedCarpenter(carpenter)}
                            className={`cursor-pointer bg-white rounded-xl border hover:border-blue-500 shadow-sm hover:shadow-md transition-all duration-300 p-5`}
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <img
                                    src={`https://i.pravatar.cc/150?u=${carpenter.id}`}
                                    alt={carpenter.name}
                                    className="w-14 h-14 rounded-full object-cover"
                                />
                                <div>
                                    <h2 className="text-lg font-bold text-gray-800">{carpenter.name}</h2>
                                    <div className="flex items-center gap-3 text-sm text-gray-600 mt-1">
                                        <span className="flex items-center gap-1">
                                            <span className="text-yellow-500">★</span>
                                            {(carpenter.rating ?? 4.8).toFixed(1)}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <span className="text-blue-600">👤</span>
                                            {(carpenter.experience ?? 8)} years
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <p className="text-sm font-medium text-gray-700 mb-2">Specialties:</p>
                                <div className="flex flex-wrap gap-2">
                                    {(carpenter.description || '')
                                        .split(',')
                                        .map((tag) => (
                                            <span
                                                key={tag.trim()}
                                                className="px-3 py-1 text-sm bg-gray-200 rounded-full text-gray-700"
                                            >
                                                {tag.trim()}
                                            </span>
                                        ))}
                                </div>
                            </div>
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
        </>
    );
};

export default Carpenters;
