var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './app.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from 'ionic-angular/navigation/nav-controller';
import * as import9 from '@angular/core/src/metadata/view';
import * as import10 from '@angular/core/src/linker/component_factory';
import * as import11 from 'ionic-angular/components/toolbar/toolbar';
import * as import12 from 'ionic-angular/components/navbar/navbar';
import * as import13 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import14 from 'ionic-angular/components/toolbar/toolbar-item';
import * as import15 from '@angular/core/src/linker/query_list';
import * as import16 from 'ionic-angular/components/button/button';
import * as import17 from 'ionic-angular/components/content/content';
import * as import18 from 'ionic-angular/components/list/list';
import * as import19 from 'ionic-angular/components/item/item';
import * as import20 from 'ionic-angular/components/list/list-header';
import * as import21 from 'ionic-angular/components/item/item-reorder';
import * as import22 from '@angular/common/src/directives/ng_for';
import * as import23 from 'ionic-angular/config/config';
import * as import24 from '@angular/core/src/linker/element_ref';
import * as import25 from 'ionic-angular/navigation/view-controller';
import * as import26 from '../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import27 from 'ionic-angular/components/app/app';
import * as import28 from '../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import29 from '../../node_modules/ionic-angular/components/button/button.ngfactory';
import * as import30 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import31 from 'ionic-angular/util/keyboard';
import * as import32 from '@angular/core/src/zone/ng_zone';
import * as import33 from 'ionic-angular/components/tabs/tabs';
import * as import34 from 'ionic-angular/gestures/gesture-controller';
import * as import35 from '../../node_modules/ionic-angular/components/item/item.ngfactory';
import * as import36 from 'ionic-angular/util/form';
import * as import37 from '@angular/core/src/linker/template_ref';
import * as import38 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import39 from 'ionic-angular/components/nav/nav';
import * as import40 from '../../node_modules/ionic-angular/components/nav/nav.ngfactory';
import * as import41 from 'ionic-angular/navigation/nav-controller-base';
import * as import42 from '@angular/core/src/linker/component_factory_resolver';
import * as import43 from 'ionic-angular/transitions/transition-controller';
import * as import44 from 'ionic-angular/navigation/deep-linker';
var renderType_ApiDemoPage_Host = null;
var _View_ApiDemoPage_Host0 = (function (_super) {
    __extends(_View_ApiDemoPage_Host0, _super);
    function _View_ApiDemoPage_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ApiDemoPage_Host0, renderType_ApiDemoPage_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ApiDemoPage_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('ng-component', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_ApiDemoPage0(this.viewUtils, this.injector(0), this._appEl_0);
        this._ApiDemoPage_0_4 = new import3.ApiDemoPage(this.parentInjector.get(import8.NavController));
        this._appEl_0.initComponent(this._ApiDemoPage_0_4, [], compView_0);
        compView_0.create(this._ApiDemoPage_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_ApiDemoPage_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.ApiDemoPage) && (0 === requestNodeIndex))) {
            return this._ApiDemoPage_0_4;
        }
        return notFoundResult;
    };
    return _View_ApiDemoPage_Host0;
}(import1.AppView));
function viewFactory_ApiDemoPage_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ApiDemoPage_Host === null)) {
        (renderType_ApiDemoPage_Host = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, [], {}));
    }
    return new _View_ApiDemoPage_Host0(viewUtils, parentInjector, declarationEl);
}
export var ApiDemoPageNgFactory = new import10.ComponentFactory('ng-component', viewFactory_ApiDemoPage_Host0, import3.ApiDemoPage);
var styles_ApiDemoPage = [];
var renderType_ApiDemoPage = null;
var _View_ApiDemoPage0 = (function (_super) {
    __extends(_View_ApiDemoPage0, _super);
    function _View_ApiDemoPage0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ApiDemoPage0, renderType_ApiDemoPage, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ApiDemoPage0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'ion-header', null);
        this._Header_0_3 = new import11.Header(this.parentInjector.get(import23.Config), new import24.ElementRef(this._el_0), this.renderer, this.parentInjector.get(import25.ViewController, null));
        this._text_1 = this.renderer.createText(this._el_0, '\n\n  ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'ion-navbar', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'toolbar');
        this._appEl_2 = new import2.AppElement(2, 0, this, this._el_2);
        var compView_2 = import26.viewFactory_Navbar0(this.viewUtils, this.injector(2), this._appEl_2);
        this._Navbar_2_4 = new import12.Navbar(this.parentInjector.get(import27.App), this.parentInjector.get(import25.ViewController, null), this.parentInjector.get(import8.NavController, null), this.parentInjector.get(import23.Config), new import24.ElementRef(this._el_2), this.renderer);
        this._appEl_2.initComponent(this._Navbar_2_4, [], compView_2);
        this._text_3 = this.renderer.createText(null, '\n    ', null);
        this._el_4 = this.renderer.createElement(null, 'ion-title', null);
        this._appEl_4 = new import2.AppElement(4, 2, this, this._el_4);
        var compView_4 = import28.viewFactory_ToolbarTitle0(this.viewUtils, this.injector(4), this._appEl_4);
        this._ToolbarTitle_4_4 = new import13.ToolbarTitle(this.parentInjector.get(import23.Config), new import24.ElementRef(this._el_4), this.renderer, this.parentInjector.get(import11.Toolbar, null), this._Navbar_2_4);
        this._appEl_4.initComponent(this._ToolbarTitle_4_4, [], compView_4);
        this._text_5 = this.renderer.createText(null, 'Item Reorder', null);
        compView_4.create(this._ToolbarTitle_4_4, [[].concat([this._text_5])], null);
        this._text_6 = this.renderer.createText(null, '\n    ', null);
        this._el_7 = this.renderer.createElement(null, 'ion-buttons', null);
        this.renderer.setElementAttribute(this._el_7, 'end', '');
        this._ToolbarItem_7_3 = new import14.ToolbarItem(this.parentInjector.get(import23.Config), new import24.ElementRef(this._el_7), this.renderer, this.parentInjector.get(import11.Toolbar, null), this._Navbar_2_4);
        this._query_Button_7_0 = new import15.QueryList();
        this._text_8 = this.renderer.createText(this._el_7, '\n      ', null);
        this._el_9 = this.renderer.createElement(this._el_7, 'button', null);
        this.renderer.setElementAttribute(this._el_9, 'ion-button', '');
        this._appEl_9 = new import2.AppElement(9, 7, this, this._el_9);
        var compView_9 = import29.viewFactory_Button0(this.viewUtils, this.injector(9), this._appEl_9);
        this._Button_9_4 = new import16.Button(null, '', this.parentInjector.get(import23.Config), new import24.ElementRef(this._el_9), this.renderer);
        this._appEl_9.initComponent(this._Button_9_4, [], compView_9);
        this._text_10 = this.renderer.createText(null, '', null);
        compView_9.create(this._Button_9_4, [[].concat([this._text_10])], null);
        this._text_11 = this.renderer.createText(this._el_7, '\n    ', null);
        this._text_12 = this.renderer.createText(null, '\n  ', null);
        compView_2.create(this._Navbar_2_4, [
            [],
            [],
            [].concat([this._el_7]),
            [].concat([
                this._text_3,
                this._el_4,
                this._text_6,
                this._text_12
            ])
        ], null);
        this._text_13 = this.renderer.createText(this._el_0, '\n\n', null);
        this._text_14 = this.renderer.createText(parentRenderNode, '\n\n\n', null);
        this._el_15 = this.renderer.createElement(parentRenderNode, 'ion-content', null);
        this.renderer.setElementAttribute(this._el_15, 'fullscreen', '');
        this._appEl_15 = new import2.AppElement(15, null, this, this._el_15);
        var compView_15 = import30.viewFactory_Content0(this.viewUtils, this.injector(15), this._appEl_15);
        this._Content_15_4 = new import17.Content(this.parentInjector.get(import23.Config), new import24.ElementRef(this._el_15), this.renderer, this.parentInjector.get(import27.App), this.parentInjector.get(import31.Keyboard), this.parentInjector.get(import32.NgZone), this.parentInjector.get(import25.ViewController, null), this.parentInjector.get(import33.Tabs, null));
        this._appEl_15.initComponent(this._Content_15_4, [], compView_15);
        this._text_16 = this.renderer.createText(null, '\n\n  ', null);
        this._el_17 = this.renderer.createElement(null, 'ion-list', null);
        this.renderer.setElementAttribute(this._el_17, 'class', 'chat-sliding-demo');
        this._List_17_3 = new import18.List(this.parentInjector.get(import23.Config), new import24.ElementRef(this._el_17), this.renderer, this.parentInjector.get(import34.GestureController));
        this._text_18 = this.renderer.createText(this._el_17, '\n    ', null);
        this._el_19 = this.renderer.createElement(this._el_17, 'ion-list-header', null);
        this.renderer.setElementAttribute(this._el_19, 'class', 'item');
        this._appEl_19 = new import2.AppElement(19, 17, this, this._el_19);
        var compView_19 = import35.viewFactory_Item0(this.viewUtils, this.injector(19), this._appEl_19);
        this._Item_19_4 = new import19.Item(this.parentInjector.get(import36.Form), this.parentInjector.get(import23.Config), new import24.ElementRef(this._el_19), this.renderer);
        this._ListHeader_19_5 = new import20.ListHeader(this.parentInjector.get(import23.Config), this.renderer, new import24.ElementRef(this._el_19), null);
        this._query_Label_19_0 = new import15.QueryList();
        this._query_Button_19_1 = new import15.QueryList();
        this._query_Icon_19_2 = new import15.QueryList();
        this._appEl_19.initComponent(this._Item_19_4, [], compView_19);
        this._text_20 = this.renderer.createText(null, '\n      Playlist\n    ', null);
        this._query_Label_19_0.reset([]);
        this._Item_19_4.contentLabel = this._query_Label_19_0.first;
        compView_19.create(this._Item_19_4, [
            [],
            [],
            [].concat([this._text_20]),
            [],
            []
        ], null);
        this._text_21 = this.renderer.createText(this._el_17, '\n\n    ', null);
        this._el_22 = this.renderer.createElement(this._el_17, 'ion-item-group', null);
        this._ItemGroup_22_3 = new import19.ItemGroup();
        this._ItemReorder_22_4 = new import21.ItemReorder(new import24.ElementRef(this._el_22), this.renderer, this.parentInjector.get(import32.NgZone), this._Content_15_4);
        this._text_23 = this.renderer.createText(this._el_22, '\n      ', null);
        this._anchor_24 = this.renderer.createTemplateAnchor(this._el_22, null);
        this._appEl_24 = new import2.AppElement(24, 22, this, this._anchor_24);
        this._TemplateRef_24_5 = new import37.TemplateRef_(this._appEl_24, viewFactory_ApiDemoPage1);
        this._NgFor_24_6 = new import22.NgFor(this._appEl_24.vcRef, this._TemplateRef_24_5, this.parentInjector.get(import38.IterableDiffers), this.ref);
        this._text_25 = this.renderer.createText(this._el_22, '\n    ', null);
        this._text_26 = this.renderer.createText(this._el_17, '\n  ', null);
        this._text_27 = this.renderer.createText(null, '\n\n', null);
        compView_15.create(this._Content_15_4, [
            [],
            [].concat([
                this._text_16,
                this._el_17,
                this._text_27
            ]),
            []
        ], null);
        this._text_28 = this.renderer.createText(parentRenderNode, '\n', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        var disposable_0 = this.renderer.listen(this._el_9, 'click', this.eventHandler(this._handle_click_9_0.bind(this)));
        this._expr_3 = import7.UNINITIALIZED;
        this._expr_4 = import7.UNINITIALIZED;
        this._expr_5 = import7.UNINITIALIZED;
        var disposable_1 = this.renderer.listen(this._el_22, 'ionItemReorder', this.eventHandler(this._handle_ionItemReorder_22_0.bind(this)));
        this._expr_7 = import7.UNINITIALIZED;
        this._expr_8 = import7.UNINITIALIZED;
        this._expr_9 = import7.UNINITIALIZED;
        var subscription_0 = this._ItemReorder_22_4.ionItemReorder.subscribe(this.eventHandler(this._handle_ionItemReorder_22_0.bind(this)));
        this._expr_10 = import7.UNINITIALIZED;
        this.init([], [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._text_11,
            this._text_12,
            this._text_13,
            this._text_14,
            this._el_15,
            this._text_16,
            this._el_17,
            this._text_18,
            this._el_19,
            this._text_20,
            this._text_21,
            this._el_22,
            this._text_23,
            this._anchor_24,
            this._text_25,
            this._text_26,
            this._text_27,
            this._text_28
        ], [
            disposable_0,
            disposable_1
        ], [subscription_0]);
        return null;
    };
    _View_ApiDemoPage0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import13.ToolbarTitle) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 5)))) {
            return this._ToolbarTitle_4_4;
        }
        if (((token === import16.Button) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 10)))) {
            return this._Button_9_4;
        }
        if (((token === import14.ToolbarItem) && ((7 <= requestNodeIndex) && (requestNodeIndex <= 11)))) {
            return this._ToolbarItem_7_3;
        }
        if (((token === import12.Navbar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 12)))) {
            return this._Navbar_2_4;
        }
        if (((token === import11.Header) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 13)))) {
            return this._Header_0_3;
        }
        if (((token === import19.Item) && ((19 <= requestNodeIndex) && (requestNodeIndex <= 20)))) {
            return this._Item_19_4;
        }
        if (((token === import20.ListHeader) && ((19 <= requestNodeIndex) && (requestNodeIndex <= 20)))) {
            return this._ListHeader_19_5;
        }
        if (((token === import37.TemplateRef) && (24 === requestNodeIndex))) {
            return this._TemplateRef_24_5;
        }
        if (((token === import22.NgFor) && (24 === requestNodeIndex))) {
            return this._NgFor_24_6;
        }
        if (((token === import19.ItemGroup) && ((22 <= requestNodeIndex) && (requestNodeIndex <= 25)))) {
            return this._ItemGroup_22_3;
        }
        if (((token === import21.ItemReorder) && ((22 <= requestNodeIndex) && (requestNodeIndex <= 25)))) {
            return this._ItemReorder_22_4;
        }
        if (((token === import18.List) && ((17 <= requestNodeIndex) && (requestNodeIndex <= 26)))) {
            return this._List_17_3;
        }
        if (((token === import17.Content) && ((15 <= requestNodeIndex) && (requestNodeIndex <= 27)))) {
            return this._Content_15_4;
        }
        return notFoundResult;
    };
    _View_ApiDemoPage0.prototype.detectChangesInternal = function (throwOnChange) {
        var changed = true;
        var changes = null;
        changed = false;
        var currVal_4 = '';
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this._Content_15_4.fullscreen = currVal_4;
            changed = true;
            this._expr_4 = currVal_4;
        }
        if (changed) {
            this._appEl_15.componentView.markAsCheckOnce();
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._Content_15_4.ngOnInit();
        }
        var currVal_7 = this.context.editing;
        if (import4.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this._ItemReorder_22_4.reorder = currVal_7;
            this._expr_7 = currVal_7;
        }
        changes = null;
        var currVal_10 = this.context.songs;
        if (import4.checkBinding(throwOnChange, this._expr_10, currVal_10)) {
            this._NgFor_24_6.ngForOf = currVal_10;
            if ((changes === null)) {
                (changes = {});
            }
            changes['ngForOf'] = new import7.SimpleChange(this._expr_10, currVal_10);
            this._expr_10 = currVal_10;
        }
        if ((changes !== null)) {
            this._NgFor_24_6.ngOnChanges(changes);
        }
        if (!throwOnChange) {
            this._NgFor_24_6.ngDoCheck();
        }
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if (this._query_Button_7_0.dirty) {
                this._query_Button_7_0.reset([this._Button_9_4]);
                this._ToolbarItem_7_3._buttons = this._query_Button_7_0;
                this._query_Button_7_0.notifyOnChanges();
            }
            if (this._query_Button_19_1.dirty) {
                this._query_Button_19_1.reset([]);
                this._Item_19_4._buttons = this._query_Button_19_1;
                this._query_Button_19_1.notifyOnChanges();
            }
            if (this._query_Icon_19_2.dirty) {
                this._query_Icon_19_2.reset([]);
                this._Item_19_4._icons = this._query_Icon_19_2;
                this._query_Icon_19_2.notifyOnChanges();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_9_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_19_4.ngAfterContentInit();
            }
        }
        var currVal_0 = this._Navbar_2_4._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setElementProperty(this._el_2, 'hidden', currVal_0);
            this._expr_0 = currVal_0;
        }
        var currVal_1 = this._Navbar_2_4._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setElementClass(this._el_2, 'statusbar-padding', currVal_1);
            this._expr_1 = currVal_1;
        }
        var currVal_3 = import4.interpolate(1, '', this.context.editButton, '');
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setText(this._text_10, currVal_3);
            this._expr_3 = currVal_3;
        }
        var currVal_5 = this._Content_15_4._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this.renderer.setElementClass(this._el_15, 'statusbar-padding', currVal_5);
            this._expr_5 = currVal_5;
        }
        var currVal_8 = this._ItemReorder_22_4._enableReorder;
        if (import4.checkBinding(throwOnChange, this._expr_8, currVal_8)) {
            this.renderer.setElementClass(this._el_22, 'reorder-enabled', currVal_8);
            this._expr_8 = currVal_8;
        }
        var currVal_9 = this._ItemReorder_22_4._visibleReorder;
        if (import4.checkBinding(throwOnChange, this._expr_9, currVal_9)) {
            this.renderer.setElementClass(this._el_22, 'reorder-visible', currVal_9);
            this._expr_9 = currVal_9;
        }
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Navbar_2_4.ngAfterViewInit();
            }
        }
    };
    _View_ApiDemoPage0.prototype.destroyInternal = function () {
        this._ItemReorder_22_4.ngOnDestroy();
        this._Content_15_4.ngOnDestroy();
    };
    _View_ApiDemoPage0.prototype._handle_click_9_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.toggleEdit() !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_ionItemReorder_22_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.reorderData($event) !== false);
        return (true && pd_0);
    };
    return _View_ApiDemoPage0;
}(import1.AppView));
export function viewFactory_ApiDemoPage0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ApiDemoPage === null)) {
        (renderType_ApiDemoPage = viewUtils.createRenderComponentType('/home/ubuntu/ionic/demos/src/item-reorder/page.html', 0, import9.ViewEncapsulation.None, styles_ApiDemoPage, {}));
    }
    return new _View_ApiDemoPage0(viewUtils, parentInjector, declarationEl);
}
var _View_ApiDemoPage1 = (function (_super) {
    __extends(_View_ApiDemoPage1, _super);
    function _View_ApiDemoPage1(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ApiDemoPage1, renderType_ApiDemoPage, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ApiDemoPage1.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_0, 'class', 'item item-block');
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = import35.viewFactory_Item0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Item_0_4 = new import19.Item(this.parent.parentInjector.get(import36.Form), this.parent.parentInjector.get(import23.Config), new import24.ElementRef(this._el_0), this.renderer);
        this._ItemContent_0_5 = new import19.ItemContent();
        this._query_Label_0_0 = new import15.QueryList();
        this._query_Button_0_1 = new import15.QueryList();
        this._query_Icon_0_2 = new import15.QueryList();
        this._appEl_0.initComponent(this._Item_0_4, [], compView_0);
        this._text_1 = this.renderer.createText(null, '\n        ', null);
        this._el_2 = this.renderer.createElement(null, 'h2', null);
        this._text_3 = this.renderer.createText(this._el_2, '', null);
        this._text_4 = this.renderer.createText(null, '\n        ', null);
        this._el_5 = this.renderer.createElement(null, 'p', null);
        this._text_6 = this.renderer.createText(this._el_5, '', null);
        this._text_7 = this.renderer.createText(null, '\n      ', null);
        this._query_Label_0_0.reset([]);
        this._Item_0_4.contentLabel = this._query_Label_0_0.first;
        compView_0.create(this._Item_0_4, [
            [],
            [],
            [].concat([
                this._text_1,
                this._el_2,
                this._text_4,
                this._el_5,
                this._text_7
            ]),
            [],
            []
        ], null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._text_7
        ], [], []);
        return null;
    };
    _View_ApiDemoPage1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import19.Item) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._Item_0_4;
        }
        if (((token === import19.ItemContent) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._ItemContent_0_5;
        }
        return notFoundResult;
    };
    _View_ApiDemoPage1.prototype.detectChangesInternal = function (throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if (this._query_Button_0_1.dirty) {
                this._query_Button_0_1.reset([]);
                this._Item_0_4._buttons = this._query_Button_0_1;
                this._query_Button_0_1.notifyOnChanges();
            }
            if (this._query_Icon_0_2.dirty) {
                this._query_Icon_0_2.reset([]);
                this._Item_0_4._icons = this._query_Icon_0_2;
                this._query_Icon_0_2.notifyOnChanges();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_0_4.ngAfterContentInit();
            }
        }
        var currVal_0 = import4.interpolate(1, '', this.context.$implicit.title, '');
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setText(this._text_3, currVal_0);
            this._expr_0 = currVal_0;
        }
        var currVal_1 = import4.interpolate(2, '', this.context.$implicit.band, ' • ', this.context.$implicit.album, '');
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setText(this._text_6, currVal_1);
            this._expr_1 = currVal_1;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_ApiDemoPage1;
}(import1.AppView));
function viewFactory_ApiDemoPage1(viewUtils, parentInjector, declarationEl) {
    return new _View_ApiDemoPage1(viewUtils, parentInjector, declarationEl);
}
var renderType_ApiDemoApp_Host = null;
var _View_ApiDemoApp_Host0 = (function (_super) {
    __extends(_View_ApiDemoApp_Host0, _super);
    function _View_ApiDemoApp_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ApiDemoApp_Host0, renderType_ApiDemoApp_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ApiDemoApp_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('ng-component', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_ApiDemoApp0(this.viewUtils, this.injector(0), this._appEl_0);
        this._ApiDemoApp_0_4 = new import3.ApiDemoApp();
        this._appEl_0.initComponent(this._ApiDemoApp_0_4, [], compView_0);
        compView_0.create(this._ApiDemoApp_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_ApiDemoApp_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.ApiDemoApp) && (0 === requestNodeIndex))) {
            return this._ApiDemoApp_0_4;
        }
        return notFoundResult;
    };
    return _View_ApiDemoApp_Host0;
}(import1.AppView));
function viewFactory_ApiDemoApp_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ApiDemoApp_Host === null)) {
        (renderType_ApiDemoApp_Host = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, [], {}));
    }
    return new _View_ApiDemoApp_Host0(viewUtils, parentInjector, declarationEl);
}
export var ApiDemoAppNgFactory = new import10.ComponentFactory('ng-component', viewFactory_ApiDemoApp_Host0, import3.ApiDemoApp);
var styles_ApiDemoApp = [];
var renderType_ApiDemoApp = null;
var _View_ApiDemoApp0 = (function (_super) {
    __extends(_View_ApiDemoApp0, _super);
    function _View_ApiDemoApp0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ApiDemoApp0, renderType_ApiDemoApp, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ApiDemoApp0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'ion-nav', null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = import40.viewFactory_Nav0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Nav_0_4 = new import39.Nav(this.parentInjector.get(import25.ViewController, null), this.parentInjector.get(import41.NavControllerBase, null), this.parentInjector.get(import27.App), this.parentInjector.get(import23.Config), this.parentInjector.get(import31.Keyboard), new import24.ElementRef(this._el_0), this.parentInjector.get(import32.NgZone), this.renderer, this.parentInjector.get(import42.ComponentFactoryResolver), this.parentInjector.get(import34.GestureController), this.parentInjector.get(import43.TransitionController), this.parentInjector.get(import44.DeepLinker, null));
        this._appEl_0.initComponent(this._Nav_0_4, [], compView_0);
        compView_0.create(this._Nav_0_4, [], null);
        this._expr_0 = import7.UNINITIALIZED;
        this.init([], [this._el_0], [], []);
        return null;
    };
    _View_ApiDemoApp0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import39.Nav) && (0 === requestNodeIndex))) {
            return this._Nav_0_4;
        }
        return notFoundResult;
    };
    _View_ApiDemoApp0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0 = this.context.root;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this._Nav_0_4.root = currVal_0;
            this._expr_0 = currVal_0;
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Nav_0_4.ngAfterViewInit();
            }
        }
    };
    return _View_ApiDemoApp0;
}(import1.AppView));
export function viewFactory_ApiDemoApp0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ApiDemoApp === null)) {
        (renderType_ApiDemoApp = viewUtils.createRenderComponentType('/home/ubuntu/ionic/demos/src/item-reorder/app.component.ts class ApiDemoApp - inline template', 0, import9.ViewEncapsulation.None, styles_ApiDemoApp, {}));
    }
    return new _View_ApiDemoApp0(viewUtils, parentInjector, declarationEl);
}
