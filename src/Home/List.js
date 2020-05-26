import Component from '../Component.js';


class List extends Component {

    render() {
        const list = this.renderDOM();
        this.props.listItems.forEach(listItem => {
            list.appendChild(this.props.displayItem(listItem));
        });
        return list;
    }

    renderTemplate() {
        return /*html*/ `
            <ul>

            </ul>
        `;
    }
}
export default List;

