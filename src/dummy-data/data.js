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

const whyUs = [
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

const help = [
    {
        id: '1',
        question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vero, maxime itaque' +
                ' provident quaerat nesciunt?',
        answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi fuga consectetur' +
                ' quas rem porro recusandae illum culpa minima atque reiciendis praesentium, aut ' +
                'quibusdam expedita perferendis eaque, voluptatibus quo repellat iste!'
    }, {
        id: '2',
        question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vero, maxime itaque' +
                ' provident quaerat nesciunt?',
        answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi fuga consectetur' +
                ' quas rem porro recusandae illum culpa minima atque reiciendis praesentium, aut ' +
                'quibusdam expedita perferendis eaque, voluptatibus quo repellat iste!'
    }, {
        id: '3',
        question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vero, maxime itaque' +
                ' provident quaerat nesciunt?',
        answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi fuga consectetur' +
                ' quas rem porro recusandae illum culpa minima atque reiciendis praesentium, aut ' +
                'quibusdam expedita perferendis eaque, voluptatibus quo repellat iste!'
    }, {
        id: '4',
        question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vero, maxime itaque' +
                ' provident quaerat nesciunt?',
        answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi fuga consectetur' +
                ' quas rem porro recusandae illum culpa minima atque reiciendis praesentium, aut ' +
                'quibusdam expedita perferendis eaque, voluptatibus quo repellat iste!'
    }, {
        id: '5',
        question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vero, maxime itaque' +
                ' provident quaerat nesciunt?',
        answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi fuga consectetur' +
                ' quas rem porro recusandae illum culpa minima atque reiciendis praesentium, aut ' +
                'quibusdam expedita perferendis eaque, voluptatibus quo repellat iste!'
    }
];

const user = [
    {
        id: '1',
        name: 'Mosaddik Ali Maruf',
        slug: 'malinjr07'
    }, {
        id: '2',
        name: 'Mujahidul Islam',
        slug: 'mujahid'
    }, {
        id: '3',
        name: 'Elem Hasib',
        slug: 'elems'
    }
];

const orders = [
    {
        id: '1',
        orderNo: 'dks2580ej',
        orderStatus: 'pending',
        amount: '550'
    }, {
        id: '1',
        orderNo: 'dks285580ej',
        orderStatus: 'shipped',
        amount: '700'
    }, {
        id: '1',
        orderNo: 'dks255680ej',
        orderStatus: 'recieved',
        amount: '1200'
    }, {
        id: '1',
        orderNo: 'dks258087ej',
        orderStatus: 'verifing',
        amount: '990'
    }, {
        id: '1',
        orderNo: 'dks258092ej',
        orderStatus: 'completed',
        amount: '1050'
    }
];

const stock = [
    {
        id:'1',
        device: 'samsung-s20-void',
        orderNo: 'dks258092ej',
        condition:'good',
        storage: '256gb',
        carrier: 'a&t'
    },
    {
        id:'2',
        device: 'samsung-s20-void',
        orderNo: 'dks258087ej',
        condition:'good',
        storage: '256gb',
        carrier: 't-mobile'
    },
    {
        id:'3',
        device: 'samsung-s20-void',
        orderNo: 'dks255680ej',
        condition:'good',
        storage: '256gb',
        carrier: 'sprint'
    },
    {
        id:'4',
        device: 'samsung-s20-void',
        orderNo: 'dks285580ej',
        condition:'good',
        storage: '512gb',
        carrier: 'varizon'
    },
    {
        id:'5',
        device: 'samsung-s20-void',
        orderNo: 'dks2580ej',
        condition:'good',
        storage: '256gb',
        carrier: 'unlocked'
    },
];



export default link;

export {
    stock,
    orders,
    user,
    category,
    products,
    steps,
    whyUs,
    help
}