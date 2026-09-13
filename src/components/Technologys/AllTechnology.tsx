import { use, useState } from 'react';
import type { TechType } from '../Type';
import AllTechnologyCard from './AllTechnologyCard';
import SelectedTechnologyCard from './SelectedTechnologyCard';
interface TechnologyPromiseProps{
    TechnologyPromise:Promise<TechType[]>;
}
const AllTechnology = ({TechnologyPromise}: TechnologyPromiseProps) => {
    const Technologys = use(TechnologyPromise);

    const [selectedTech, setSelectedTech] = useState<TechType[]>([])
    console.log(selectedTech);

    return (
        <div className='container mx-auto'>
            <h1 className='font-bold text-4xl'>Explore the <span className='text-pink-500'>Technologies</span></h1>
            <p>Pick one technology per catagory to build your ideal stack.</p>
            <div className='grid grid-cols-1 sm:grid-cols-4 gap-4 mt-12'>
                <div className='col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {
                    Technologys.map(Technology => <AllTechnologyCard Technology={Technology} key={Technology.id} selectedTech={selectedTech} setSelectedTech={setSelectedTech}/>)
                }
            </div>
            <div>
                <SelectedTechnologyCard selectedTech={selectedTech} setSelectedTech={setSelectedTech} />
            </div>
            </div>
            
        </div>
    );
};

export default AllTechnology;