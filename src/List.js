import Component from './Component.js';


class List extends Component {
    render() {
        const { listItems, displayItem } = this.props;

        const list = this.renderDOM();
        listItems.forEach(listItem => {
            list.appendChild(displayItem(listItem));
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

