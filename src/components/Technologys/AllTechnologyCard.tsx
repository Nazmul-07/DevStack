import { useState, type Dispatch, type SetStateAction } from "react";
import type { TechType } from "../Type";
import { Bounce, toast } from "react-toastify";

interface TechnologyProps {
  Technology: TechType;
  selectedTech: TechType[];
  setSelectedTech: Dispatch<SetStateAction<TechType[]>>;
}

const AllTechnologyCard = ({
  Technology,
  selectedTech,
  setSelectedTech,
}: TechnologyProps) => {
  const [btnType, setBtnType] = useState<boolean>(false);

  const handleBtn = (tech: TechType) => {
    const checkTech = selectedTech.find((t) => tech.id === t.id);
    if (!checkTech) {
      const newSelectedTech = [...selectedTech, tech];
      setSelectedTech(newSelectedTech);
      setBtnType(true);
      toast.success(tech.name + " added in Stack", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  return (
    <div className="relative flex min-h-67.5 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl">
      <span className="absolute right-4 top-4 rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
        {Technology.badge}
      </span>

      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-200 p-2">
        <img
          src={Technology.icon}
          alt={Technology.name}
          className="h-9 w-9 object-contain"
        />
      </div>

      <h2 className="mt-4 text-xl font-bold text-slate-900">
        {Technology.name}
      </h2>

      <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-500">
        {Technology.description}
      </p>

      <div className="mt-auto pt-5">
        <div className="mb-4 grid grid-cols-3 items-center gap-2 text-xs">
          <span className="w-fit rounded-md bg-slate-100 px-2.5 py-1.5 font-medium text-slate-600">
            {Technology.category}
          </span>

          <span className="text-center text-slate-500">
            {Technology.difficulty}
          </span>

          <span className="text-right font-semibold text-slate-700">
            <span className="text-yellow-400">★</span> {Technology.rating}
          </span>
        </div>

        <button
          disabled={btnType}
          onClick={()=> handleBtn(Technology)}
          className="w-full rounded-lg bg-slate-950 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-400"
        >
          {btnType ? "Added" : "Add to Stack"}
        </button>
      </div>
    </div>
  );
};

export default AllTechnologyCard;
