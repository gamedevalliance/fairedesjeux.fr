<template>
    <g-link v-if="!disabled" :to="src" class="button">
        <div>
            <slot>Error</slot>
        </div>
    </g-link>

    <div v-else class="button disabled">
        <div>
            <slot>Error</slot>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            src: {
                type: String,
                default: '#',
            },
            disabled: {
                type: Boolean,
                default: false,
            },
        },
    };
</script>
