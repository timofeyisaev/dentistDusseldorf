import React from 'react';
import s from './style.module.css';

export default function SecondBlock() {

    const submit = event => {
        event.preventDefault();
        const {name, comment, datetime} = event.target;        
        const object = {
            'Ihr Name': name.value,
            'Ihr Termin': datetime.value,
            'Ihr Kommentar': comment.value
        };
        console.log(object);
        };


  return (
    <div className={s.mainContainer}>
        <div className={s.firstContainer}>
            <div className={s.leftBlock}>
                <h3>Unser Tipp</h3>

                <p>In Deutschland gefertigter Zahnersatz ist hochwertig und langlebig. Sie können mit Ihrem Zahnersatz noch länger zubeißen und lächeln, wenn Sie ihn gut pflegen. Putzen Sie Ihre Zähne und den Zahnersatz regelmäßig und gründlich.
                </p>

                <p>Nutzen Sie die notwendigen Hilfsmittel wie Zahnbürste, Zahnzwischenraumbürste oder Zahnseide.
                </p>

                <p>Ihr Zahnarzt kann mit Hilfe einer professionellen Zahnreinigung (PZR) Beläge und Verfärbungen entfernen. Besuchen Sie regelmäßig Ihren Zahnarzt, um rechtzeitig Schäden zu erkennen und zu beseitigen.
                </p>

            </div>
            <form action="" className={s.form} onSubmit={submit}>
                <h3>Let's talk!</h3>
                <p>Termin buchen</p>
                <input type="text" placeholder='Vorname und Name' name='name' />
                <p>Termin buchen</p>
                <input type="datetime-local" name="datetime" />
                <p>Termin buchen</p>
                <textarea name="comment" cols="30" rows="10" placeholder='Ihr Kommentar'></textarea>
                <button>Anfrage auf Termin senden</button>
            </form>

        </div>
        <div className={s.secondContainer}>
            <h3> Besuchen Sie regelmäßig Ihren Zahnarzt, um rechtzeitig Schäden zu erkennen und zu beseitigen.

            </h3>

            <p>Sie haben einen gesetzlichen Anspruch auf Leistungen, die medizinisch notwendig sind (Regelversorgung). Die gesetzliche Krankenversicherung finanziert diese. Die moderne Zahnheilkunde und Zahntechnik entwickelt sich ständig weiter. Darum müssen Sie für neue Materialien und neue Methoden manchmal eigenes Geld investieren. Ihr Zahnarzt berät Sie gerne und sucht mit Ihnen gemeinsam die beste Lösung.
            </p>

        </div>

    </div>
  )
}
