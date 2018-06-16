const enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

enzyme.configure({ adapter: new Adapter() });

Object.values = (obj) => Object.keys(obj).map(key => obj[key])