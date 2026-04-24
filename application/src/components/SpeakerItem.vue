<template>
    <div class="col-lg-4 mt-lg-0 mt-4">
        <div class="card shadow-lg h-100 d-flex flex-column">
            <div class="card-header p-0 mx-3 mt-3 position-relative z-index-1">
                <div class="d-block blur-shadow-image" style="aspect-ratio: 1; overflow: hidden; border-radius: 0.5rem;">
                   <slot name="image"></slot>
                </div>
                <slot name="image-shadow"></slot>
            </div>
            <div class="card-body d-flex flex-column flex-grow-1">
                <h3 class="mt-3 h4">
                    <slot name="name"></slot>
                </h3>
                <p class="mb-0">
                    <slot></slot>
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.blur-shadow-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}
</style>