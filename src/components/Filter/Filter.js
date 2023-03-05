import { useDispatch, useSelector } from 'react-redux';
import { FilterTitle, FilterFind, FilterInput } from './Filter.styled';
import { setFilterContact, selectFilters } from 'redux/filtersSlice';

export const Filter = () => {
    const filter = useSelector(selectFilters);
    const dispatch = useDispatch();

    const changeFilter = event => {
        const value = event.target.value.toLowerCase().trim();
        dispatch(setFilterContact(value));
    };
    return (
        <FilterTitle>
            <FilterFind>Find contacts by name</FilterFind>
            <FilterInput type="text" value={filter} onChange={changeFilter}/>
        </FilterTitle>
    );
};