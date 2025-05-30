import './styles/CategoryMenu.css'
import { FcElectronics } from "react-icons/fc";
import { GiClothes } from "react-icons/gi";
import { TbHorseToy } from "react-icons/tb";

const iconMap = {
    electronics: FcElectronics,
    clothes: GiClothes,
    toys: TbHorseToy,
};

function CategoryMenu({ categories, selected, onSelectCategory  }) {

    return (
        <nav>
            <ul className="categories">
                {categories.map((category, idx) => {
                    const Icon = iconMap[category.icon];
                    const isActive = selected && selected.name === category.name;

                    return (
                        <li className="category-item" key={category.name}>
                            <button key={idx}
                                type="button"
                                className={`category-button ${isActive ? 'active' : ''}`}
                                onClick={() => onSelectCategory(category)}
                            >
                                {Icon && <Icon />} {category.name}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default CategoryMenu;