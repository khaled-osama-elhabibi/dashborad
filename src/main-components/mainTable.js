class Row extends React.Component {
    render() {
        return (
            <tr className = "main-table__row">
                    <td className = "main-table__row__cell">22 Feb 2021</td>
                    <td className = "main-table__row__cell">{this.props.product}</td>
                    <td className = "main-table__row__cell">{this.props.size}</td>
                    <td className = "main-table__row__cell">Footlocker UK</td>
                    <td className = "main-table__row__cell">{this.props.price}</td>
                    <td className = "main-table__row__cell">
                        <span className = {"main-table__row__cell__stat--"+this.props.status}>{this.props.status}</span>
                    </td>
            </tr>
                    
        );
    }
}
class MainRow extends React.Component {
    render() {
        return (
            <tr className = "main-table__main-row">
            <td className = "main-table__main-row__cell display-flex">
                DATE
                <span className="material-icons">
                    unfold_more
                </span>
            </td>
            <td className = "main-table__main-row__cell">PRODUCT</td>
            <td className = "main-table__main-row__cell">SIZE (US)</td>
            <td className = "main-table__main-row__cell">WEBSITE</td>
            <td className = "main-table__main-row__cell">PRICE</td>
            <td className = "main-table__main-row__cell">STATUS</td>
        </tr>                    
        );
    }
}

class MainTable extends React.Component {
    render() {
        return (
            <div className = "main-table__container">
            <table className = "main-table">
                <MainRow/>
                <Row product = "Jordan 11 Retro Jubilee" size = {9.0} price = "$211" status = "SUCCESS" />
                <Row product = "Jordan 11 Retro Jubilee" size = {9.0} price = "$211" status = "SUCCESS" />
                <Row product = "Jordan 6 Retro Carmine (2021)" size = {10.0} price = "$252" status = "FAIL" />
                <Row product = "Jordan 11 Retro Jubilee" size = {9.0} price = "$211" status = "SUCCESS" />

                <Row product = "Jordan 11 Retro Jubilee" size = {9.0} price = "$211" status = "SUCCESS" />
                <Row product = "Jordan 6 Retro Carmine (2021)" size = {10.0} price = "$252" status = "FAIL" />
                <Row product = "Jordan 11 Retro Jubilee" size = {9.0} price = "$211" status = "SUCCESS" />
                <Row product = "Jordan 11 Retro Jubilee" size = {9.0} price = "$211" status = "SUCCESS" />

                <Row product = "Jordan 6 Retro Carmine (2021)" size = {10.0} price = "$252" status = "FAIL" />
                <Row product = "Jordan 11 Retro Jubilee" size = {9.0} price = "$211" status = "SUCCESS" />

                <Row product = "Jordan 6 Retro Carmine (2021)" size = {10.0} price = "$252" status = "FAIL" />
                <Row product = "Jordan 11 Retro Jubilee" size = {9.0} price = "$211" status = "SUCCESS" />
                <Row product = "Jordan 11 Retro Jubilee" size = {9.0} price = "$211" status = "SUCCESS" />
                <Row product = "Jordan 11 Retro Jubilee" size = {9.0} price = "$211" status = "SUCCESS" />
                <Row product = "Jordan 11 Retro Jubilee" size = {9.0} price = "$211" status = "SUCCESS" />

                <Row product = "Jordan 6 Retro Carmine (2021)" size = {10.0} price = "$252" status = "FAIL" />
                <Row product = "Jordan 11 Retro Jubilee" size = {9.0} price = "$211" status = "SUCCESS" />
                <Row product = "Jordan 11 Retro Jubilee" size = {9.0} price = "$211" status = "SUCCESS" />
                <Row product = "Jordan 11 Retro Jubilee" size = {9.0} price = "$211" status = "SUCCESS" />
                <Row product = "Jordan 11 Retro Jubilee" size = {9.0} price = "$211" status = "SUCCESS" />

            </table>
            </div>
        );
    }
}

export default MainTable ; 