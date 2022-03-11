export function Page() {

    const specs = {};

    ReactDOM.render(React.createElement(PageView, specs), this.container);
    this.container.id = 'beyond-ui-dialogs-page';

}
