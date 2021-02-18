<script type="text/javascript">
        $(document).ready(function(){
            $('.warna').each(function(){
                var warna=$(this).attr('tittle');
                $(this).css({'background':warna});
                $(this).click(function(){
                    $('body').css({'background':warna});
                });
            });
        });
    </script>