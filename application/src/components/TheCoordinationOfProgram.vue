<script>
export default {}
</script>
<template>
    <div class="col-lg-3 col-md-6 mb-4">
        <h5 class="mb-1">{{ $t("home.coordination") }}</h5>
        <p class="text-secondary small mb-3">{{ $t("home.coordination_message") }}</p>
        <div class="d-flex flex-wrap gap-3 justify-content-center">
            <a href="https://www.eldorado.org.br/" target="_blank" class="text-center text-decoration-none">
                <img src="/assets/img/logos/el_dorado.png" alt="Instituto de Pesquisas Eldorado" class="img-fluid rounded-3" style="max-height: 80px;">
                <div class="small text-dark mt-1">Eldorado</div>
            </a>
            <a href="https://www.dal.ca/" target="_blank" class="text-center text-decoration-none">
                <img src="/assets/img/logos/dalhousie.png" alt="Dalhousie University" class="img-fluid rounded-3" style="max-height: 80px;">
                <div class="small text-dark mt-1">Dalhousie</div>
            </a>
        </div>
    </div>
</template>
