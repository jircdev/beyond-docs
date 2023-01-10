export const model = new (class {
    #data = {
        total: 100,
        itemsPerPage: 30,
    };

    get specs() {
        return this.#data;
    }

    #dataItem = {
        id: "Primer plan",
        name: "Plan",
        dateStart: "hoy ? ",
        dateEnd: "Hoy",
        user: "Yo",
    };

    #items = [];
    get items() {
        return this.#items;
    }

    #currentPage = 2;
    get currentPage() {
        return this.#currentPage;
    }
    set currentPage(value) {
        if (value === this.#currentPage) return;
        this.#currentPage = value;
    }
    get totalPages() {
        const { total, itemsPerPage } = this.#data;
        return Math.ceil(total / itemsPerPage);
    }
    constructor() {
        for (let i = 0; i < this.#data.itemsPerPage; i++) {
            this.#items.push({ ...this.#dataItem, name: `${this.#dataItem.name} ${i} ` });
        }
    }
    /**
     * connect to backend api
     */

    getData() {}
})();
