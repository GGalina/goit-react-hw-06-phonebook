import { useDispatch } from 'react-redux';
import { filterContact } from 'Redux/phonebookSlice';
import { FilterArea, FilterDesc, Input } from './Filter.styled';


export const Filter = () => {
    const dispatch = useDispatch();

    const onFilter = event => {
        dispatch(filterContact(event.currentTarget.value.toLowerCase()));
    };

    return (
        <FilterArea>
            <FilterDesc>Find contacts by name</FilterDesc>
            <Input
                onChange={onFilter}
                type="text"
            />
        </FilterArea>
    );
};