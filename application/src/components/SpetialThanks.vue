<script>
export default {}
</script>
<template>
    <div class="col-lg-3 col-md-6 mb-4">
        <h3 class="h5 mb-1">{{ $t("home.sponsors") }}</h3>
        <p class="text-secondary small mb-3">{{ $t("home.sponsors_message") }}</p>
        <div class="d-flex flex-wrap gap-4 justify-content-center align-items-center">
            <a href="https://fapitec.se.gov.br/" target="_blank" class="text-center text-decoration-none">
                <img src="/assets/img/sponsors/fapitec_se.png" alt="FAPITEC/SE" class="img-fluid rounded-3" style="max-height: 80px;">
                <div class="small text-dark mt-1">FAPITEC/SE</div>
            </a>
            <a href="https://cgi.br/" target="_blank" class="text-center text-decoration-none">
                <img src="/assets/img/sponsors/cgibr.PNG" alt="CGI.br / NIC.br" class="img-fluid rounded-3" style="max-height: 80px; max-width: 140px;">
                <div class="small text-dark mt-1">CGI.br / NIC.br</div>
            </a>
        </div>
    </div>
</template>
