// import { useState } from "react"


// const SearchFilter = ({onFilterChange}) => {
//     const [vacine, setVacine] = useState(null);
//     const [animals, setAnimals] = useState(null);
//     const [gender, setGaender] = useState('');
//     const [ageRange, setAgeRange] = useState('');

//     const handleVacineChange = (e) => {
//         const value = e.target.value === 'any' ? null : e.target.value === 'true';
//         setVacine(value);
//         onFilterChange({ vacine: value, animals, gender, ageRange})
//     }

//     const handleAnimalChange = (e) => {
//         const value = e.target.value === 'any' ? null : e.target.value === 'true';
//         setAnimals(value);
//         onFilterChange({vacine, animals: value, gender, ageRange})
//     }

//     const handleGenderChange = (e) => {
//         const value = e.target.value;
//         setGaender(value)
//         onFilterChange({vacine, animals, gender: value, ageRange})
//     }

//     const handleAgeChange = (e) => {
//         const value = e.target.value;
//         setAgeRange(value);
//         onFilterChange({vacine, animals, gender, ageRange: value})
//     }
//     return (
//         <div className="filter">
//             <label>
//                 Privitie:
//                 <select value={vacine === null ? 'any' : vacine} onChange={handleVacineChange}>
//                     <option value='any'>Any</option>
//                     <option value='true'>Yes</option>
//                     <option value='false'>No</option>
//                 </select>
//             </label>

//             <label>
//                 Friendly
//                 <select value={animals === null ? 'any' : animals} onChange={handleAnimalChange}>
//                     <option value='any'>Any</option>
//                     <option value='true'>Yes</option>
//                     <option value='false'>No</option>
//                 </select>
//             </label>

//             <label>
//                 Gender:
//                 <select value={gender} onChange={handleGenderChange}>
//                     <option value="">Any</option>
//                     <option value="boy">Boy</option>
//                     <option value="girl">Girl</option>
//                 </select>
//             </label>

//             <label>
//                 Возраст:
//                 <select value={ageRange} onChange={handleAgeChange}>
//                     <option value="">Любой</option>
//                     <option value="0-1">До 1 года</option>
//                     <option value="1-3">1-3 года</option>
//                     <option value="3-5">3-5 лет</option>
//                     <option value="5-10">5-10 лет</option>
//                     <option value="10+">10+ лет</option>
//                 </select>
//             </label>
//         </div>
//     )
// }


// export default SearchFilter