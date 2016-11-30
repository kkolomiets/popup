'use strict';

var product__list = [
    {
        product_id: 12,
        product_img: 'https://theodivo.com/1310-sq_mid/crewneck-stretch-knitted-cropped-jumper-bevza.jpg',
        product_title: 'Product title',
        product_manufacturer: 'Product Manufacturer',
        product_attribute: 'Size: S',
        product_attribute_id: '09',
        product_cost: '$100'
    },
    {
        product_id: 14,
        product_img: 'https://theodivo.com/1310-sq_mid/crewneck-stretch-knitted-cropped-jumper-bevza.jpg',
        product_title: 'Product title',
        product_manufacturer: 'Product Manufacturer',
        product_attribute: 'Size: M',
        product_attribute_id: '09',
        product_cost: '$100'
    },
    {
        product_id: 14,
        product_img: 'assets/css/img/modal_logo.png',
        product_title: 'Product title',
        product_manufacturer: 'Product Manufacturer',
        product_attribute: 'Size: M',
        product_attribute_id: '09',
        product_cost: '$100'
    },
    {
        product_id: 14,
        product_img: 'assets/css/img/modal_logo.png',
        product_title: 'Product title',
        product_manufacturer: 'Product Manufacturer',
        product_attribute: 'Size: M',
        product_attribute_id: '09',
        product_cost: '$100'
    },
    {
        product_id: 14,
        product_img: 'assets/css/img/modal_logo.png',
        product_title: 'Product title',
        product_manufacturer: 'Product Manufacturer',
        product_attribute: 'Size: M',
        product_attribute_id: '09',
        product_cost: '$100'
    },
    {
        product_id: 14,
        product_img: 'assets/css/img/modal_logo.png',
        product_title: 'Product title',
        product_manufacturer: 'Product Manufacturer',
        product_attribute: 'Size: M',
        product_attribute_id: '09',
        product_cost: '$100'
    },
];

var shopping__bag = {
    subtotal : 'TOTAL (TAX EXCL.) $996',
    coupone : '30% ON YOUR FIRST ORDER -$299',
    shipping : 'SHIPPING FREE',
    total : 'TOTAL PRODUCT $698',
    checkout : {
        url : '#',
        text : 'CHECKOUT'
    }
};

window.ee = new EventEmitter();

var Product = React.createClass({
    render: function() {
        var data = this.props.data;
        var newsTemplate = data.map(function(item,index){
            return (
                <div key={index} className="odivo__column odivo__column_modal">
                    <div className="odivo__column">
                        <img className="odivo__img odivo__img_modal" src={item.product_img} />
                    </div>
                    <div className="odivo__column">
                        <div className="odivo__text odivo__text_name">{item.product_title}</div>
                        <div className="odivo__text odivo__text_hint">{item.product_manufacturer}</div>
                        <div className="odivo__text odivo__text_size">{item.product_attribute}</div>
                        <div className="odivo__text odivo__text_cost odivo__text_cost-modal">{item.product_cost}</div>
                    </div>
                </div>
            );
        })

        return (
            <div className="odivo__modal-content mCustomScrollbar" data-mcs-theme="dark">
                {newsTemplate}
            </div>
        );
    }
});

var Sidebar = React.createClass({
    render : function() {
        return (
            <div className="odivo__modal-area">
                <img className="odivo__modal-logo" src="assets/css/img/modal_logo.png" alt="theodivo" />
                <div className="odivo__modal-info">
                    <div className="odivo__modal-text">
                        <div className="odivo__text odivo__text_hint">{this.props.data.checkout.subtotal}</div>
                        <div className="odivo__text odivo__text_hint">{this.props.data.checkout.coupone}</div>
                        <div className="odivo__text odivo__text_hint">{this.props.data.checkout.shipping}</div>
                        <div className="odivo__text odivo__text_name">{this.props.data.checkout.total}</div>
                    </div>
                    <a href={this.props.data.checkout.url} className="odivo__form-button odivo__form-button_check">{this.props.data.checkout.text}</a>
                </div>
            </div>
        );
    }
});

var ShoppingBagBtn = React.createClass({
    getInitialState: function() {
        return {
            cart_count: 2,
        };
    },
    toggleShoppingBag: function(e) {
        e.preventDefault();

        PopUp.changeState(true);
    },
    render: function() {
        return (
            <a  className="show-sc"
                href="#"
                title="View my shopping cart"
                rel="nofollow"
                onClick={this.toggleShoppingBag}
                >
                Shopping bag (<span className="ajax_cart_quantity unvisible">{this.state.cart_count}</span><span className="ajax_cart_no_product">{this.state.cart_count}</span>)
            </a>
        );
    }
});

var PopUp = React.createClass({
    getInitialState: function() {
        return {
            enable: false,
        };
    },
    changeState: function(curStatus) {
        this.setState({ enable: curStatus },function(){
            console.log(this.state.enable);
        });
    },
    componentDidMount: function() {
        var self = this;
        window.ee.addListener('News.add', function(item) {
            var nextNews = item.concat(self.state.news);
            self.setState({news: nextNews});
        });
    },
    componentWillUnmount: function() {
        window.ee.removeListener('News.add');
    },
    // componentDidMount() {
        /*$.get('your/url/here').done((loadedData) => {
            this.setState({data: loadedData});
        });*/
    // },
    render : function() {
        console.log(this.state.enable);
        return (
            <section className="odivo odivo_modal">
                <div className="odivo__container odivo__container_details">
                    <a href="#test-popup" className="odivo__form-button odivo__form-button_check open-popup-link">CHECKOUT</a>
                    <div id="test-popup" className="odivo__window mfp-hide">
                        <div  className="odivo__modal">
                            <Product data={product__list} />
                            <Sidebar data={shopping__bag} />
                        </div>
                    </div>
                </div>
            </section>
       );
   }
});

ReactDOM.render(
    <PopUp />,
    document.getElementById('shopping-bag__popup')
);

ReactDOM.render(
    <ShoppingBagBtn />,
    document.getElementById('shopping-bag__button')
);