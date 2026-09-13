import { use, useState } from 'react';
import type { TechType } from '../Type';
import AllTechnologyCard from './AllTechnologyCard';
import SelectedTechnologyCard from './SelectedTechnologyCard';

interface TechnologyPromiseProps {
    TechnologyPromise: Promise<TechType[]>;
}

const AllTechnology = ({ TechnologyPromise }: TechnologyPromiseProps) => {
    const Technologys = use(TechnologyPromise);

    const [selectedTech, setSelectedTech] = useState<TechType[]>([]);

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">

            <div className="mb-8">
                <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl">
                    Explore the{' '}
                    <span className="text-pink-500">Technologies</span>
                </h1>

                <p className="text-sm sm:text-base text-gray-500 mt-2">
                    Pick one technology per category to build your ideal stack.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

                <div className="lg:col-span-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                        {Technologys.map((Technology) => (
                            <AllTechnologyCard
                                Technology={Technology}
                                key={Technology.id}
                                selectedTech={selectedTech}
                                setSelectedTech={setSelectedTech}
                            />
                        ))}
                    </div>
                </div>

                <div className="lg:col-span-1">
                    <SelectedTechnologyCard
                        selectedTech={selectedTech}
                        setSelectedTech={setSelectedTech}
                    />
                </div>

            </div>
        </div>
    );
};

export default AllTechnology;