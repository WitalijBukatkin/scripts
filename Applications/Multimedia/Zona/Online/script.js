const OnlineInstallerScript = include("engines.wine.quick_script.online_installer_script");

const Corefonts = include("engines.wine.verbs.corefonts");

new OnlineInstallerScript()
    .name("Zona")
    .editor("Zona Team")
    .applicationHomepage("https://www.zona.ru")
    .author("vitalijbukatkin")
    .url("https://install4.zonastat.com/ZonaSetup.exe")
    .category("Multimedia")
    .executable("Zona.exe")
    .wineArchitecture("x86")
    .wineVersion("4.0.3")
    .preInstall((wine) => {
        new Corefonts(wine).go();
    });
