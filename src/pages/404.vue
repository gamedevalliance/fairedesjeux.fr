<template>
    <layout>
        <section>
            <div class="w-full sm:w-450 mx-auto sm:my-48 px-2">
                <h2 class="text-center text-5xl sm:text-big">
                    Erreur 404
                </h2>
                <p>
                    Frapper sa tête contre son clavier n'est pas la manière la plus efficace de naviguer... Essayez plutôt
                    <g-link to="/">
                        la page d'accueil
                    </g-link> !
                </p>
            </div>
        </section>
    </layout>
</template>

<script>
    export default {
        metaInfo() {
            return {
                title: 'Erreur 404',
                meta: [
                    {
                        key: 'og:description',
                        name: 'og:description',
                        content: 'Frapper sa tête contre son clavier n\'est pas la manière la plus efficace de naviguer...',
                    },
                    {
                        key: 'og:image',
                        name: 'og:image',
                        content: 'http://fairedesjeux.fr/cover.png',
                    },
                ],
            };
        },
    };
</script>
