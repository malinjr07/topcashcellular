const link = process.env.PUBLIC_URL;

const imgLink = `${link}/vendor/img`;

/* HomePage Data */

const category = [
    {
        id: '1',
        title: 'Samsung',
        slug: 'samsung',
        type: 'mobile'
    }, {
        id: '2',
        title: 'iPhone',
        slug: 'iphone',
        type: 'mobile'
    }, {
        id: '3',
        title: 'MacBook',
        slug: 'apple-macbook',
        type: 'laptop'
    }, {
        id: '4',
        title: 'iPad',
        slug: 'ipad',
        type: 'tablet'
    }, {
        id: '9',
        title: 'Uncategorized',
        slug: 'uncategorized',
        type: 'all'
    }
];

const products = [
    {
        id: '1',
        title: 'Samsung S20 Ultra',
        category: 'samsung',
        slug: 'samsung-s20-ultra'
    }, {
        id: '2',
        title: 'Samsung S10 Ultra',
        category: 'iPhone',
        slug: 'samsung-s10-ultra'
    }, {
        id: '3',
        title: 'Samsung S20',
        category: 'iPad',
        slug: 'samsung-s20'
    }, {
        id: '4',
        title: 'Samsung S9 Ultra',
        category: 'apple-macbook',
        slug: 'samsung-s9-ultra'
    }, {
        id: '5',
        title: 'Samsung S9',
        category: 'samsung',
        slug: 'samsung-s9'
    }, {
        id: '6',
        title: 'Samsung A30',
        category: 'samsung',
        slug: 'samsung-a30'
    }, {
        id: '7',
        title: 'Samsung J7 Pro',
        category: 'samsung',
        slug: 'samsung-j7-pro'
    }, {
        id: '8',
        title: 'Samsung S7 Edge',
        category: 'samsung',
        slug: 'samsung-s7-edge'
    }, {
        id: '9',
        title: 'Samsung S50 Ultra',
        category: 'samsung',
        slug: 'samsung-s50-ultra'
    }, {
        id: '10',
        title: 'Samsung S20 Void',
        category: 'samsung',
        slug: 'samsung-s20-void'
    }, {
        id: '11',
        title: 'Samsung S20 Ultra',
        category: 'iphone',
        slug: 'samsung-s20-ultra'
    }, {
        id: '12',
        title: 'Samsung S10 Ultra',
        category: 'iPhone',
        slug: 'samsung-s10-ultra'
    }, {
        id: '13',
        title: 'Samsung S20',
        category: 'iPad',
        slug: 'samsung-s20'
    }, {
        id: '14',
        title: 'Samsung S9 Ultra',
        category: 'apple-macbook',
        slug: 'samsung-s9-ultra'
    }, {
        id: '15',
        title: 'Samsung S9',
        category: 'iphone',
        slug: 'samsung-s9'
    }, {
        id: '16',
        title: 'Samsung A30',
        category: 'iphone',
        slug: 'samsung-a30'
    }, {
        id: '17',
        title: 'Samsung J7 Pro',
        category: 'iphone',
        slug: 'samsung-j7-pro'
    }, {
        id: '18',
        title: 'Samsung S7 Edge',
        category: 'iphone',
        slug: 'samsung-s7-edge'
    }, {
        id: '19',
        title: 'Samsung S50 Ultra',
        category: 'iphone',
        slug: 'samsung-s50-ultra'
    }, {
        id: '20',
        title: 'Samsung S20 Void',
        category: 'iphone',
        slug: 'samsung-s20-void'
    }
];

const steps = [
    {
        id: '1',
        title: 'get a quote',
        details: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, commodi.',
        icon: `${imgLink}//1-how-it-works.png`
    }, {
        id: '2',
        title: 'Shiped to Us',
        details: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, commodi.',
        icon: `${imgLink}//1-how-it-works.png`
    }, {
        id: '3',
        title: `You'll know`,
        details: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, commodi.',
        icon: `${imgLink}//1-how-it-works.png`
    }
];

const whyUs=[
    {
        id: '1',
        title: 'High Price',
        details: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, commodi.',
        icon: `${imgLink}//1-how-it-works.png`
    }, {
        id: '2',
        title: 'Super Site',
        details: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, commodi.',
        icon: `${imgLink}//1-how-it-works.png`
    }, {
        id: '3',
        title: `Nothing More`,
        details: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, commodi.',
        icon: `${imgLink}//1-how-it-works.png`
    }
];

/* HomePAge Data Complete */

const help=[
    {
        
    },
]

export default link;

export { category, products, steps, whyUs, help}