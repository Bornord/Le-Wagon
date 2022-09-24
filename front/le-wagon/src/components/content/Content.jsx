// import de composants
import './Content.scss';
import Card from '../../components/card/Card';

function Content() {
	return (
		<div>
			<h2>Promotions</h2>
			<h3>Here you can find custom promotions !</h3>
			<div className="wrapper">
				<Card
					content="blabla"
					link="https://images.unsplash.com/photo-1437418747212-8d9709afab22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1664&q=80"
				/>
				<Card
					content="blabla 2.0"
					link="https://images.unsplash.com/photo-1561150169-371f366b828a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
				/>
				<Card
					content="blabla 3.0"
					link="https://images.unsplash.com/photo-1566666152520-27af5f022a0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
				/>
			</div>
		</div>
	);
}

export default Content;
