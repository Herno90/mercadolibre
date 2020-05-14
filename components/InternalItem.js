import { Grid, Cell } from "styled-css-grid";
import t from "../utils/translation";
import { formatPrice } from "./Item";
export default ({ item }) => {
    console.log(item);
    return (
        <section className="internal-item">
            <Grid className="internal-item-grid" columns={'100%'}>
                <Cell>
                    <img src={item.picture} />
                </Cell>
                <Cell>
                    <label>{t(item.condition)}</label>
                    <div className="internal-item-title">{item.title}</div>
                    <div className="internal-item-price">{formatPrice(item.price.amount, item.price.currency)}</div>
                </Cell>
                <Cell>
                    <h2>Descripción del producto</h2>
                    <p>{item.description}</p>
                </Cell>
            </Grid>
        </section>
    );
}