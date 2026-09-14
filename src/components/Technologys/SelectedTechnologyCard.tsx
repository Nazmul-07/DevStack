import type { Dispatch, SetStateAction } from "react";
import type { TechType } from "../Type";
import { TiDelete } from "react-icons/ti";
import { Bounce, toast } from "react-toastify";

interface SelectedTechnologyCardProps {
  selectedTech: TechType[];
  setSelectedTech: Dispatch<SetStateAction<TechType[]>>;
}

const SelectedTechnologyCard = ({
  selectedTech,
  setSelectedTech,
}: SelectedTechnologyCardProps) => {
  const handleRemoveBtn = (tech: TechType) => {
    const remaning = selectedTech.filter((t) => tech.id !== t.id);
    setSelectedTech(remaning);
    toast.error(tech.name + " deleted successfully", {
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
  };

  const handleRemoveAllBtn = () => {
    setSelectedTech([]);
    toast.warning("Stack cleared", {
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
  };

  return (
    <div className="border border-slate-300 rounded-2xl p-4">
      <h1 className="font-bold text-xl">Your Stack</h1>
      <p className="mb-5 text-slate-400">
        {selectedTech.length === 0
          ? `No technologies selected yet.`
          : `${selectedTech.length} Technology Selected.`}
      </p>
      {selectedTech.length === 0 && (
        <h1 className="flex items-center justify-center border border-dotted border-slate-400 rounded-lg font-semibold py-8 text-slate-400 bg-gray-100">
          Your stack is empty.
        </h1>
      )}
      {selectedTech.map((tech) => {
        return (
          <div className="flex items-center justify-between border border-dotted border-slate-300 rounded-lg p-3 mb-3">
            <div className="flex items-center gap-3">
              <img
                src={tech.icon}
                alt={tech.name}
                className="h-10 w-10 object-contain bg-slate-200 p-1 rounded-md"
              />

              <div>
                <h1 className="font-semibold">{tech.name}</h1>
                <p className="text-sm text-gray-500">{tech.category}</p>
              </div>
            </div>

            <TiDelete
              onClick={() => handleRemoveBtn(tech)}
              className="text-2xl text-red-500 cursor-pointer"
            />
          </div>
        );
      })}
      {selectedTech.length > 0 && (
        <button
          onClick={handleRemoveAllBtn}
          className="w-full mt-7 border border-pink-500 rounded-md py-1 text-pink-500 hover:bg-pink-500 hover:text-slate-50 transition-all duration-300 cursor-pointer"
        >
          Remove All
        </button>
      )}
    </div>
  );
};

export default SelectedTechnologyCard;
