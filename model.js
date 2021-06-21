/*
     - godkjenne oppgave (Oppstarts Prøve)
     - registrere opptakssamtale
     - flytte student til modul
     - liste studenter for en bestemt modul
     - liste studenter for et bestemt sted      
                    ekstra for Interesse.
     - Legge til Fylke i skjermbilde til Interesse. 
     - Legge til Bilde i skjermbilde til Interesse. (?) yes!
*/

const model = {
    app: {
        currentPage: 'studenter',
    },

    tasks: [
        { description: 'Modul 2', isDone: true, person: 'Erlend'},
        { description: 'Modul 2', isDone: false, person: 'Stine'},
        { description: 'Modul 2', isDone: false, person: 'Jhonny' },
        { description: 'Modul 2', isDone: false, person: 'Leslie' },
    ],

    interesseStud: [
        {
        interesseMelding: {
            id: null,
            navn: 'Navn',
            født: 'Født',
            adresse: 'Adresse',
            tlf: 'Tlf',
            epost: 'ePost',
            navKontor: 'Nav Kontor',
            naveileder: 'Nav Veileder',
            navEpost: 'Nav ePost',
            navTlf: 'Nav Tlf',
        }

        },
    ],

    inputs: {

        interesseMelding: {
            id: null,
            navn: 'Navn',
            født: 'Født',
            adresse: 'Adresse',
            tlf: 'Tlf',
            epost: 'ePost',
            navKontor: 'Nav Kontor',
            naveileder: 'Nav Veileder',
            navEpost: 'Nav ePost',
            navTlf: 'Nav Tlf',

        },


        interesse: {
            studentId: 10,
            opptaksprøve: null, //eller (false/true)
            opptakssamtale: null, //eller (false/true)
            kursId: 1031,

        },
        slettModul: {

            slettmodulId: 'slett',
            arkiverModul: '',
            fjernModul: 'true', // null
            studentId: '',
            kursHistorikk: [1010, 1021, 1031],

        },

        studenter: {
            navn: '',

            modul: '',

            ePost: '',

            tlf: '',
        },


        redigerStudent: {
            studentId: 25,
            redigerId: 'edit',
            knappTrykket: false, //eller true
            adresse: 'Fogdenget 2, 7020 Trondheim',
            mail: 'Erlend@getacademy.no',
            tlf: '123456789',
            navKontor: 'Nav Lerkendal',
            navVeileder: 'Anita',
            navTlf: '123 45 678',
            navMail: 'anita@nav.no',
        },

        slettStudent: {
            slettStudentId: 'delete',
            onclick: [true, false],
            studentId: 'auto',

        },


        opprettModul: [
            { id: 1011, kurs: 'Modul 1', startDato: '2021-05-10' },
            { id: 1021, kurs: 'Modul 2', startDato: '2021-05-10' },
            { id: 1031, kurs: 'Modul 3', startDato: '2021-05-10' },
        ],

        lastOppBilde: {
            bilde: '',
        },

    },

    forside: [{
        linker: [
            'Utdanning',
            'Neste oppstart',
            'Startit/Getit',
            'Om oss',
            'Kontakt',
        ],
        navigasjon: ['Interesse', 'Studenter'],
    }, ],
    fylke: [
        { id: 1, name: 'Agder' },
        { id: 2, name: 'Innlandet' },
        { id: 3, name: 'Møre og Romsdal' },
        { id: 4, name: 'Nordland' },
        { id: 5, name: 'Oslo' },
        { id: 6, name: 'Rogaland' },
        { id: 7, name: 'Vestfold og Telemark' },
        { id: 8, name: 'Troms og Finnmark' },
        { id: 9, name: 'Trøndelag' },
        { id: 10, name: 'Vestlandet' },
        { id: 11, name: 'Viken' },

    ],
    kurs: [
        { id: 1011, name: 'Modul 1', startDato: '2021-05-10' },
        { id: 1021, name: 'modul 2', startDato: '2021-05-10' },
        { id: 1031, name: 'modul 3', startDato: '2021-05-10' }
    ],

    studenter: [{
            id: 10,
            navn: 'Terje',
            fødselsdato: '28.12.95',
            adresse: 'Fogdenget 2, 7020 Trondheim',
            mail: 'Erlend@getacademy.no',
            tlf: '123456789',
            navKontor: 'Nav Lerkendal',
            navVeileder: 'Anita',
            gjennomførtOpptaksPrøve: null,
            opptaksSamtale: null, // '2021-05-31'
            kurs: null,
            kursHistorikk: [],
            fylke: 3,
        },

        /* Ny test for interesse oppsettet. + videre sending til StudentMappe*/
        {
            studentId: 25,
            bilde: 'Erlend.jpg',
            navn: 'Erlend Lien',
            fødselsdato: '28.12.1995',
            adresse: 'Fogdenget 2, 7029 Trondheim',
            fylke: 9,
            mail: 'erlend@getacademy.no',
            tlf: '123 45 678',
            //NavInformasjon
            navKontor: 'Nav Lerkendal',
            navVeileder: 'Anita ',
            navTlf: '123 45 678',
            navMail: 'anita@nav.no',
            //inputs
            opptaksPrøve: false,
            opptaksSamtale: true,
            //kurs info
            modulOppstart: '2021-05-10',
            kurs: 1021,
            kursHistorikk: [1011, 1021],

        },
        {
            id: 1,
            navn: 'Erlend Lien',
            fødselsdato: '28.12.95',
            adresse: 'Fogdenget 2, 7029 Trondheim',
            mail: 'Erlend@getacademy.no',
            tlf: '123456789',
            navKontor: 'Nav Lerkendal',
            navVeileder: 'Anita ',
            gjennomførtOpptaksPrøve: false,
            opptaksSamtale: true,
            modulOppstart: '09.03.2021',
            sendtTilModul: true,
            kurs: 1031,
            kursHistorikk: [1010, 1021, 1031],
        },

    ],

    studenterOversikt: [{
        studentId: 1,
        nåværendeModul: 2,

        // profilStudent: {
        //     navn: '',
        //     født: '',
        //     adresse: '',
        //     tlf: '',
        //     epost: '',
        //     oppdateringvarsel:'',
        //     redigerstudentview: '',

        //     navKontor: {
        //         Veileder: '',
        //         epost: '',
        //         tlf: '',
        //     }
        // },

        profilStudentDropdown: {
            møter: '',
            raport: '',
            notater: [''],
            oppgaver: [''],
            oblig: ['Oblig 1'],
            oppdateringvarsel: '',
        },
        sted: {
            // radioInput: 'by' ikke ferdig, usikker hvordan jeg henviser riktig
        },
    }, ],

    
};