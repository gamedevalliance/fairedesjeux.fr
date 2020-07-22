<template>
    <div :class="[areaBackground, 'text-base', 'rounded-md', 'mt-4', 'px-4', 'py-2', 'text-font']">
        <g-image
            :immediate="true"
            :src="require(`!!assets-loader?quality=100!@medals/${medalData[rank].image}`)"
            class="h-5 w-5 inline-block object-cover mr-1"
        />
        <span v-if="rank === 'GOLD' || rank === 'PLATINUM'" class="font-bold text-sm">
            {{ medalData[rank].message }}
            <g-link to="/contribuer/avant-propos/charte/" title="Critères de qualité" class="border-none align-top text-xs">
                [?]
            </g-link>
        </span>
        <span v-else class="font-bold text-sm">
            {{ medalData[rank].message }}
            <g-link v-if="rank === 'SILVER'"
                    to="/contribuer/avant-propos/charte/"
                    title="Critères de qualité"
                    class="border-none align-top text-xs"
            >
                [?]
            </g-link>
            <g-link v-else to="/contribuer/avant-propos/charte/">nos critères de qualité</g-link> :
        </span>

        <div v-if="rank === 'BRONZE' || rank === 'SILVER'" class="text-sm" v-html="$page.section.medal_message"></div>
    </div>
</template>

<script>
    export default {
        props: {
            rank: {
                type: String,
                required: true,
            },
        },
        data: () => ({
            medalData: {
                BRONZE: {
                    image: 'medal-bronze.png',
                    message: 'Cette formation ne correspond plus à',
                },
                SILVER: {
                    image: 'medal-argent.png',
                    message: 'Cette formation est incomplète',
                },
                GOLD: {
                    image: 'medal-or.png',
                    message: 'Vous lisez une formation de qualité.',
                },
                PLATINUM: {
                    image: 'medal-platine.png',
                    message: 'Vous lisez notre meilleure formation !',
                },
            },
        }),
        computed: {
            areaBackground() {
                switch (this.rank) {
                case 'BRONZE':
                    return 'bg-red-900';
                case 'SILVER':
                    return 'bg-area';
                default:
                    return '';
                }
            },
        },
    };
</script>
