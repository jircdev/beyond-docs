class PageView extends React.Component {

    constructor(props) {
        super(props);
        this.modal = React.createRef();
        this.button = React.createRef();
        this.parent = React.createRef();
        this.alert = React.createRef();
        this.textarea = React.createRef();
        this.alertCentered = React.createRef();
        this.confirm = React.createRef();

        this.state = {'cls': ''};

    }

    open(cls) {
        this.setState({'cls': cls});
        this.modal.current.open();
    }

    openAlert(centered) {
        const alert = centered ? this.alertCentered : this.alert;
        alert.current.open();
    }

    openConfirm() {
        this.confirm.current.open();
    }

    copy(event) {
        const target = event.currentTarget;
        const textarea = this.textarea.current;

        textarea.value = target.innerText;
        textarea.select();
        textarea.setSelectionRange(0, 99999); /*For mobile devices*/

        document.execCommand("copy");
        console.log(`text copied`)

    }

    componentDidMount() {
        const codes = this.parent.current.querySelectorAll('pre');
        codes.forEach(item => item.addEventListener('click', this.copy.bind(this)));
    }

    render() {

        const cls = this.state.cls;
        return (
            <main ref={this.parent}>
                <textarea ref={this.textarea}/>
                <h2>Custom Modal</h2>
                <BeyondImport name="BeyondModal" route="/libraries/beyond-ui/modal/code.js"/>
                <span className="text-muted">Example: </span>
                <pre>
                    {'<BeyondModal className="cls">{content}</BeyondModal>'}
                </pre>
                <BeyondButton onClick={() => this.open()}>Abrir</BeyondButton>
                <BeyondButton onClick={() => this.open('md')}>Abrir Mediano</BeyondButton>
                <BeyondButton onClick={() => this.open('lg')}>Abrir Grande</BeyondButton>
                <hr/>
                <h2>Alert Modal</h2>
                <BeyondImport name="BeyondAlertModal" route="/libraries/beyond-ui/modal/code.js"/>
                <span className="text-muted">Example: </span>
                <pre>
                    {'<BeyondAlertModal ref={this.alert} text="Esto es un alert"/>'}
                </pre>
                <BeyondButton onClick={() => this.openAlert()}>Alert</BeyondButton>

                <BeyondButton onClick={() => this.openAlert('centered')}>Alert centrado</BeyondButton>
                <hr/>
                <h2>Confirmation Modal</h2>
                <BeyondImport name="BeyondConfirmModal" route="/libraries/beyond-ui/modal/code.js"/>
                <span className="text-muted">Example: </span>
                <pre>
                    {'<BeyondAlertModal ref={this.alert} text="Esto es un confirm" title="title"/>'}
                </pre>
                <BeyondButton onClick={() => this.openConfirm()}>Confirm</BeyondButton>
                <BeyondButton onClick={() => this.openConfirm()}>Confirm Centrado</BeyondButton>

                <BeyondAlertModal ref={this.alert} text="Esto es un alert"/>
                <BeyondAlertModal
                    ref={this.alertCentered} centered title="Esto es un alert centrado"/>
                <BeyondConfirmModal
                    ref={this.confirm}
                    text="Esto es un alert"
                    onConfirm={() => console.log("confirmado")}
                    onCancel={() => console.log('cancelado')}
                />
                <BeyondModal ref={this.modal} className={cls}>
                    <div>
                        <h2>Esto es un modal</h2>
                        <h4>Esto tiene contenido</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consectetur cum doloribus
                            eaque facilis modi sapiente sunt voluptas. Ab aliquam animi, aperiam asperiores consequatur
                            consequuntur culpa deleniti deserunt dignissimos dolorem error, esse exercitationem expedita
                            facilis id illum impedit ipsa ipsam laboriosam libero magnam molestiae nemo officia,
                            pariatur porro quas qui quidem quo quod rem similique suscipit temporibus tenetur veniam
                            vero vitae voluptatum? Asperiores assumenda dolores, ipsam mollitia repellendus temporibus
                            voluptates? Alias dignissimos eos eum incidunt nostrum odit perspiciatis qui repellendus,
                            reprehenderit ut. Culpa eius nam quaerat! A accusantium aspernatur, cum excepturi fugiat
                            illum ipsam maiores molestiae, officia quo, similique sit tempore. Adipisci consequuntur
                            cumque dolore doloribus dolorum, eaque esse facere minima modi molestiae praesentium quaerat
                            quibusdam reiciendis reprehenderit sequi similique temporibus veritatis? Alias aspernatur
                            iste minus numquam officia, soluta sunt? Harum natus, odio! Aspernatur, autem, eos error,
                            eveniet expedita iste laudantium maiores mollitia qui quos recusandae reprehenderit saepe
                            soluta. Ut.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consequatur corporis deleniti
                            doloribus neque, nulla officiis quo rem rerum vel? Aperiam atque consectetur culpa
                            distinctio eaque esse eum explicabo fuga id inventore iusto laudantium libero mollitia nemo,
                            nulla numquam officiis optio quae quasi quibusdam quo quod recusandae sed, tempore ullam
                            vitae voluptas voluptatem. Cupiditate, delectus dolorem error est et expedita iste maxime
                            molestias neque nesciunt non odio omnis placeat quos ratione repellat vel. Alias, culpa
                            cupiditate deleniti dolor dolorem eaque, enim hic incidunt inventore iste labore magnam
                            molestiae neque non nulla odio voluptates? Dolores ducimus, ea et ratione tempora totam.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consectetur cum doloribus
                            eaque facilis modi sapiente sunt voluptas. Ab aliquam animi, aperiam asperiores consequatur
                            consequuntur culpa deleniti deserunt dignissimos dolorem error, esse exercitationem expedita
                            facilis id illum impedit ipsa ipsam laboriosam libero magnam molestiae nemo officia,
                            pariatur porro quas qui quidem quo quod rem similique suscipit temporibus tenetur veniam
                            vero vitae voluptatum? Asperiores assumenda dolores, ipsam mollitia repellendus temporibus
                            voluptates? Alias dignissimos eos eum incidunt nostrum odit perspiciatis qui repellendus,
                            reprehenderit ut. Culpa eius nam quaerat! A accusantium aspernatur, cum excepturi fugiat
                            illum ipsam maiores molestiae, officia quo, similique sit tempore. Adipisci consequuntur
                            cumque dolore doloribus dolorum, eaque esse facere minima modi molestiae praesentium quaerat
                            quibusdam reiciendis reprehenderit sequi similique temporibus veritatis? Alias aspernatur
                            iste minus numquam officia, soluta sunt? Harum natus, odio! Aspernatur, autem, eos error,
                            eveniet expedita iste laudantium maiores mollitia qui quos recusandae reprehenderit saepe
                            soluta. Ut.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consequatur corporis deleniti
                            doloribus neque, nulla officiis quo rem rerum vel? Aperiam atque consectetur culpa
                            distinctio eaque esse eum explicabo fuga id inventore iusto laudantium libero mollitia nemo,
                            nulla numquam officiis optio quae quasi quibusdam quo quod recusandae sed, tempore ullam
                            vitae voluptas voluptatem. Cupiditate, delectus dolorem error est et expedita iste maxime
                            molestias neque nesciunt non odio omnis placeat quos ratione repellat vel. Alias, culpa
                            cupiditate deleniti dolor dolorem eaque, enim hic incidunt inventore iste labore magnam
                            molestiae neque non nulla odio voluptates? Dolores ducimus, ea et ratione tempora totam.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consectetur cum doloribus
                            eaque facilis modi sapiente sunt voluptas. Ab aliquam animi, aperiam asperiores consequatur
                            consequuntur culpa deleniti deserunt dignissimos dolorem error, esse exercitationem expedita
                            facilis id illum impedit ipsa ipsam laboriosam libero magnam molestiae nemo officia,
                            pariatur porro quas qui quidem quo quod rem similique suscipit temporibus tenetur veniam
                            vero vitae voluptatum? Asperiores assumenda dolores, ipsam mollitia repellendus temporibus
                            voluptates? Alias dignissimos eos eum incidunt nostrum odit perspiciatis qui repellendus,
                            reprehenderit ut. Culpa eius nam quaerat! A accusantium aspernatur, cum excepturi fugiat
                            illum ipsam maiores molestiae, officia quo, similique sit tempore. Adipisci consequuntur
                            cumque dolore doloribus dolorum, eaque esse facere minima modi molestiae praesentium quaerat
                            quibusdam reiciendis reprehenderit sequi similique temporibus veritatis? Alias aspernatur
                            iste minus numquam officia, soluta sunt? Harum natus, odio! Aspernatur, autem, eos error,
                            eveniet expedita iste laudantium maiores mollitia qui quos recusandae reprehenderit saepe
                            soluta. Ut.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consequatur corporis deleniti
                            doloribus neque, nulla officiis quo rem rerum vel? Aperiam atque consectetur culpa
                            distinctio eaque esse eum explicabo fuga id inventore iusto laudantium libero mollitia nemo,
                            nulla numquam officiis optio quae quasi quibusdam quo quod recusandae sed, tempore ullam
                            vitae voluptas voluptatem. Cupiditate, delectus dolorem error est et expedita iste maxime
                            molestias neque nesciunt non odio omnis placeat quos ratione repellat vel. Alias, culpa
                            cupiditate deleniti dolor dolorem eaque, enim hic incidunt inventore iste labore magnam
                            molestiae neque non nulla odio voluptates? Dolores ducimus, ea et ratione tempora totam.</p>
                    </div>
                </BeyondModal>
            </main>
        );

    }

}