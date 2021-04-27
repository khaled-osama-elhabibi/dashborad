class FilterBY extends React.Component {
    render() {
        return (
            <div className = "filter-by">
                <div className = "filter-by__statment">Filter by :</div>
                <div className = "filter-by__options">
                    <span className = "filter-by__options__btn">1D</span>
                    <span className = "filter-by__options__btn filter-by__options__btn--active">1M</span>
                    <span className = "filter-by__options__btn">1Y</span>    
                </div>
            </div>            
        );
    }
}

export default FilterBY ;