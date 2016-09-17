<!DOCTYPE html>

<html>
    <!-- head burda -->
    <head>
    <base href="/">
    
    <link rel="stylesheet" href="styles/semantic.min.css" />
    <link rel="stylesheet" href="styles/bootstrap.min.css" />
    <link rel="stylesheet" href="styles/font-awesome.min.css" />
    <link rel="icon" type="image/png" href="images/sitelogo.png">
    <title>Dubbing shoW</title>


    <script src="/scripts/jquery.js"></script>

    <script src="/scripts/semantic.min.js"></script>
    <script src="/scripts/bootstrap.min.js"></script>


    <script src="node_modules/core-js/client/shim.min.js"></script>
    <script src="node_modules/zone.js/dist/zone.js"></script>
    <script src="node_modules/reflect-metadata/Reflect.js"></script>
    <script src="node_modules/systemjs/dist/system.src.js"></script>
    <script src="systemjs.config.js"></script>
    <script>
        System.import('app').catch(function(err){ console.error(err); });
    </script>


    <style>
        @media only screen and (max-width: 991px) {
            .temm{
                padding: 0;
            }
        }
        @media only screen and (max-width: 767px) {
            .navbar-brand{
                position: absolute;
                width: 100%;
                left: 0;
                text-align: center;
            }
            .merkez{
                margin: 0 auto;
            }
        
        }
        .temm{
            padding-right:0;
            margin-bottom: 10px;
        }

        @font-face {
        font-family: SaytFont;
        src: url("Comfortaa.otf") format("opentype");
        }
        body{
            font-family: "SaytFont";
            background-image: url(back.png);
        }
    </style>
</head>
    
    <main-app>
        <div style="left: 0; top: 0;position: fixed;width: 100%;height: 100%; background-color: rgba(0,0,0,0.7); z-index: 20;color: #fff;" id="dimmer" >
            <div style="display: flex; align-items: center; width: 100%; height: 100%; text-align: center;" >
                <div style="width: 100%">
                    <i class="fa fa-circle-o-notch fa-spin fa-4x"></i><br><span style="font-size: 25px;">Loading</span>
                </div>
            </div>
        </div>
    </main-app>

</html>