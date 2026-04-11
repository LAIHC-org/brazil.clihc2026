<script>
export default {}
</script>
<template>
    <div class="col-lg-3 col-md-6 mb-4">
        <h5 class="mb-1">{{ $t("home.organization") }}</h5>
        <p class="text-secondary small mb-3">{{ $t("home.organization_message") }}</p>
        <div class="d-flex flex-wrap gap-3 justify-content-center">
            <a href="https://www.uninassau.edu.br/" target="_blank" class="text-center text-decoration-none">
                <img src="/assets/img/logos/uninassau.png" alt="Centro Universitário Maurício de Nassau" class="img-fluid rounded-3" style="max-height: 80px;">
                <div class="small text-dark mt-1">Uninassau</div>
            </a>
            <a href="https://www.ufs.br/" target="_blank" class="text-center text-decoration-none">
                <img src="/assets/img/logos/ufs.png" alt="Universidade Federal de Sergipe" class="img-fluid rounded-3" style="max-height: 80px;">
                <div class="small text-dark mt-1">UFS</div>
            </a>
        </div>
    </div>
</template>
