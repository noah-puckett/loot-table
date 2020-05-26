import Component from '../Component.js';

class MonsterForm extends Component {
    
    render() {
        const { handleSubmit } = this.props;

        const dom = this.renderDOM();

        const form = dom.querySelector('form');

        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const formData = new FormData(form);

            let selectedRace = formData.getAll('race');
            if(!selectedRace[0]) {
                selectedRace = formData.getAll('race')[1];
            }
            else {
                selectedRace = formData.getAll('race')[0];
            }

            const data = {
                race: selectedRace,
                rank: Number(formData.get('rank'))
            };

            handleSubmit(data);
        });


        return dom;
    }

    // TODO: grab all existing races from db and dynamically render the options
    // TODO: style the form it's hideous :(

    renderTemplate() {
        return /*html*/ ` 
            <div class="form">
                <form>
                    <label for="race">Select an existing race: 
                        <select name="race">
                            <option value="" ></option>
                            <option value="goblin">Goblin</option>
                        </select>
                        or enter a new race:
                            <input name="race" type="text" value=""> 
                        </label>

                    <label for="rank"> Enter a rank:
                        <input name="rank" type="number" min=0>
                    </label>
                    <button id="upload-monster">Upload Monster</button>
                </form>
            </div>
        `;
    }
}
export default MonsterForm;