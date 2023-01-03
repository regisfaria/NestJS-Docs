'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nestjs-docs documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-29625e96065ce164c69fc99014fa53cd9cee33227b8cc1ef282a97b92fc2bffb28d1e1f9fc53a9bae9dc17c032100001d1e477d40daf92dca956e7d7b6ca36e5"' : 'data-target="#xs-controllers-links-module-AppModule-29625e96065ce164c69fc99014fa53cd9cee33227b8cc1ef282a97b92fc2bffb28d1e1f9fc53a9bae9dc17c032100001d1e477d40daf92dca956e7d7b6ca36e5"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-29625e96065ce164c69fc99014fa53cd9cee33227b8cc1ef282a97b92fc2bffb28d1e1f9fc53a9bae9dc17c032100001d1e477d40daf92dca956e7d7b6ca36e5"' :
                                            'id="xs-controllers-links-module-AppModule-29625e96065ce164c69fc99014fa53cd9cee33227b8cc1ef282a97b92fc2bffb28d1e1f9fc53a9bae9dc17c032100001d1e477d40daf92dca956e7d7b6ca36e5"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-29625e96065ce164c69fc99014fa53cd9cee33227b8cc1ef282a97b92fc2bffb28d1e1f9fc53a9bae9dc17c032100001d1e477d40daf92dca956e7d7b6ca36e5"' : 'data-target="#xs-injectables-links-module-AppModule-29625e96065ce164c69fc99014fa53cd9cee33227b8cc1ef282a97b92fc2bffb28d1e1f9fc53a9bae9dc17c032100001d1e477d40daf92dca956e7d7b6ca36e5"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-29625e96065ce164c69fc99014fa53cd9cee33227b8cc1ef282a97b92fc2bffb28d1e1f9fc53a9bae9dc17c032100001d1e477d40daf92dca956e7d7b6ca36e5"' :
                                        'id="xs-injectables-links-module-AppModule-29625e96065ce164c69fc99014fa53cd9cee33227b8cc1ef282a97b92fc2bffb28d1e1f9fc53a9bae9dc17c032100001d1e477d40daf92dca956e7d7b6ca36e5"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UserModule-ca828bad031f3004d28f2f6277b8b84fc181789f1fa6902d5945c2b901406dcb35293551b76dccabbe9ac9a4db967711a127df0563870239f7b4af604822515d"' : 'data-target="#xs-controllers-links-module-UserModule-ca828bad031f3004d28f2f6277b8b84fc181789f1fa6902d5945c2b901406dcb35293551b76dccabbe9ac9a4db967711a127df0563870239f7b4af604822515d"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-ca828bad031f3004d28f2f6277b8b84fc181789f1fa6902d5945c2b901406dcb35293551b76dccabbe9ac9a4db967711a127df0563870239f7b4af604822515d"' :
                                            'id="xs-controllers-links-module-UserModule-ca828bad031f3004d28f2f6277b8b84fc181789f1fa6902d5945c2b901406dcb35293551b76dccabbe9ac9a4db967711a127df0563870239f7b4af604822515d"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UserModule-ca828bad031f3004d28f2f6277b8b84fc181789f1fa6902d5945c2b901406dcb35293551b76dccabbe9ac9a4db967711a127df0563870239f7b4af604822515d"' : 'data-target="#xs-injectables-links-module-UserModule-ca828bad031f3004d28f2f6277b8b84fc181789f1fa6902d5945c2b901406dcb35293551b76dccabbe9ac9a4db967711a127df0563870239f7b4af604822515d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-ca828bad031f3004d28f2f6277b8b84fc181789f1fa6902d5945c2b901406dcb35293551b76dccabbe9ac9a4db967711a127df0563870239f7b4af604822515d"' :
                                        'id="xs-injectables-links-module-UserModule-ca828bad031f3004d28f2f6277b8b84fc181789f1fa6902d5945c2b901406dcb35293551b76dccabbe9ac9a4db967711a127df0563870239f7b4af604822515d"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});