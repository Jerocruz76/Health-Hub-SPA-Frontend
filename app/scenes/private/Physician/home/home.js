import styles from './home.css';

export function HomeScene() {

  const pageContent = `
    <p>Welcome to the home view.</p>
    <section class="${styles['grid-container']}">
      <div class="${styles['left-container']}"></div>
      <div class="${styles['other-container']}"></div>
      <div class="${styles['right-container']}"></div>
    </section>
  `;

  const logic = () => {};

  return {
    pageContent,
    logic
  }
}