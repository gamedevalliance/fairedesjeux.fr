mb-6 mt-3<template>
    <Layout>
        <article class="container mx-auto text-lg font-body">
            <div class="grid grid-cols-cont gap-col">
                <aside class="content mt-12">
                    <div class="bg-area rounded-lg py-3 px-6 mb-3">
                        <span class="caption">Créer un premier jeu</span>
                        <!-- Mock up start -->
                        <ul>
                            <li>Apprendre en vidéo</li>
                            <li>Votre premier dialogue</li>
                            <li>Les personnages</li>
                            <li>Images et sons</li>
                            <li>Les choix de dialogue</li>
                            <li>Ajouter des fins</li>
                            <li class="quizz">
                                Faire le test
                            </li>
                        </ul>
                    </div>
                    <div class="bg-area rounded-lg py-3 px-6 mb-3">
                        <span class="caption">Découvrir les variables</span>
                        <ul>
                            <li>Apprendre en vidéo</li>
                            <li>Content</li>
                            <li>Content</li>
                            <li>Content</li>
                            <li class="quizz">
                                Faire le test
                            </li>
                        </ul>
                    </div>
                    <div class="bg-area rounded-lg py-3 px-6 mb-3">
                        <span class="caption">Faire un point&click</span>
                        <ul>
                            <li>Apprendre en vidéo</li>
                            <li>Content</li>
                            <li>Content</li>
                            <li>Content</li>
                            <li class="quizz">
                                Faire le test
                            </li>
                        </ul>
                    </div>
                    <div class="bg-area rounded-lg py-3 px-6 mb-3">
                        <span class="caption">Pour aller plus loin</span>
                        <ul>
                            <li>Aide mémoire</li>
                            <li>Découvrir la documentation</li>
                            <li>Ressources utiles</li>
                        </ul>
                    </div>
                </aside>
                <!-- Mock up end -->
                <div class="content" v-html="$page.section.content"></div>
                <!-- Mock up start -->
                <nav class="local-sidebar mt-12 text-right">
                    <a class="edit-the-page">Modifier la page</a><br />
                    <span class="caption-toc">Sur cette page</span>
                    <ul class="local-toc text-font-3">
                        <li>Apprendre en vidéo</li>
                        <li>Content</li>
                        <li>Content</li>
                        <li>Content</li>
                    </ul>
                </nav>
                <!-- Mock up end -->
            </div>
        </article>
    </Layout>
</template>

<style lang="postcss" scoped>
    article >>> {
        & p, & ul {
            @apply text-font mb-6 mt-3 leading-normal;

            & a {
                @apply no-underline text-astride border-solid border-b border-astride;

                padding-bottom: 1px;
                transition: border-color 0.12s ease, color 0.12s ease;

                &:hover {
                    @apply text-marvin border-marvin;
                }
            }
        }

        & h2 {
            @apply mb-3 mt-3 font-bold text-5xl leading-normal text-astride font-title tracking-title;
        }

        & h3 {
            @apply mb-3 mt-10 font-semibold text-3xl leading-normal text-remi font-title tracking-title;
        }

        & h4 {
            @apply mx-auto mb-6 mt-3 font-semibold leading-normal text-font-2 font-title text-center tracking-title;
        }

        & .caption {
            @apply mb-0 mt-8 font-semibold text-base leading-normal text-font tracking-title;
        }

        & ul {
            @apply list-none list-inside mb-3 mt-1 font-semibold text-sm leading-normal text-font-2;
        }

        & .quizz {
            @apply text-astride;
        }

        & ol {
            @apply list-decimal list-inside;
        }

        & .edit-the-page {
            @apply mb-6 mt-3 leading-normal no-underline text-sm text-font-3 border-solid border-0;

            padding-bottom: 1px;
            transition: border-color 0.12s ease, color 0.12s ease;

            &:hover {
                @apply border-b text-font-2 border-font-2;
            }
        }

        & .caption-toc {
            @apply leading-normal no-underline text-base text-font border-solid border-0;
        }

        & .local-toc {
            & li {
                @apply leading-normal no-underline text-sm text-font-3 border-solid border-0;

                padding-bottom: 1px;
                transition: border-color 0.12s ease, color 0.12s ease;

                &:hover {
                    @apply border-b text-font-2 border-font-2;
                }
            }
        }

        & .content {
            & img {
                @apply max-w-full;

                /* @media (min-width: 640px) {
                    margin-left: auto;
                    margin-right: auto;
                    max-width: 100%;
                    width: 100%;
                }

                @media (min-width: 1280px) {
                    margin-left: calc(-30vw + 50%);
                    margin-right: calc(-30vw + 50%);
                    max-width: 60vw;
                    width: 60vw;
                } */
            }

            /*
                NOTE: This style is used for captions of images and videos. Very practical for the authors
                as they only have to do a line return and write in italics. - erika, 2020-04-20
            */
            & img + noscript + em {
                @apply text-center text-sm text-font-2 mt-6 mb-0 block;
            }
        }

        & pre, & code {
            @apply border-0 bg-area text-sm mb-6 mt-3;

            text-shadow: none;
            box-shadow: none;
        }

        & blockquote {
            @apply border-solid border-l-4 border-astride;

            & p {
                @apply m-5 italic;
            }
        }
    }

</style>

<page-query>
    query ($id: ID!) {
        section(id: $id) {
            title
            content
            description
        }
    }
</page-query>
