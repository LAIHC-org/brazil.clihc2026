<script>
export default {}
</script>
<template>
    <div class="col-lg-3 col-md-6 mb-4">
        <h5 class="mb-1">{{ $t("home.supporters") }}</h5>
        <p class="text-secondary small mb-3">{{ $t("home.supporters_message") }}</p>
        <div class="d-flex flex-wrap gap-3 justify-content-center">
            <a href="https://www.sbc.org.br/" target="_blank" class="text-center text-decoration-none">
                <img src="/assets/img/sponsors/sbc_br.png" alt="Sociedade Brasileira de Computação" class="img-fluid rounded-3" style="max-height: 80px;">
                <div class="small text-dark mt-1">SBC</div>
            </a>
        </div>
    </div>
</template>
