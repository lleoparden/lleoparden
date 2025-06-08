import tailwindcss from '@tailwindcss/postcss';
import autoprefixer from 'autoprefixer';

export default {
  plugins: [
    tailwindcss({
      config: './tailwind.config.js', // make sure this path is correct
    }),
    autoprefixer(),
  ],
};
