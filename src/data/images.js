/* eslint-disable no-undef */
const importAll = (context) => context.keys().map(context);

const imageContext = require.context('src/assets/iconos/', false, /\.(png|jpe?g|svg)$/);
const images = importAll(imageContext);

export default images;
