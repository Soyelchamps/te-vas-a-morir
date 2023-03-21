import {
  FilterButton,
  FilterButtonContainer,
  FiltersContainer,
  ItemsLeft,
} from "./TodoFilters.components";

const TodoFilters = ({
  total,
  activeFilter,
  showAllTodos,
  showActiveTodos,
  showCompletedTodos,
  handleClearComplete,
}) => {
  return (
    <FiltersContainer>
      <ItemsLeft total={total} />
      <FilterButtonContainer>
        <FilterButton
          action={() => showAllTodos()}
          active={activeFilter}
          filter="Todos"
        />
        <FilterButton
          action={() => showActiveTodos()}
          active={activeFilter}
          filter="Por realizar"
        />
        <FilterButton
          action={() => showCompletedTodos()}
          active={activeFilter}
          filter="Completados"
        />
      </FilterButtonContainer>
      <button
        onClick={() => handleClearComplete()}
        className="text-gray-400 hover:text-white cursor-pointer transition-all duration-300 ease-in"
      >
        Clear Completed
      </button>
    </FiltersContainer>
  );
};

export { TodoFilters };
