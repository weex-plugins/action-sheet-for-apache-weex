/**
 * Created by Weex.
 * Copyright (c) 2016, Alibaba, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache Licence 2.0.
 * For the full copyright and license information,please view the LICENSE file in the root directory of this source tree.
 */

#import "WXActionSheetModule.h"
#import <WeexSDK/WXConvert.h>

@interface WXActionSheetModule()

@property(nonatomic,copy)NSArray *items;
@property(nonatomic)BOOL isAnimating;
@property(nonatomic)NSInteger index;

@end

@implementation WXActionSheetModule
@synthesize weexInstance;
WX_EXPORT_METHOD(@selector(create:callback:))


/**
 create actionsheet

 @param options items
 @param callback
 */
-(void)create:(NSDictionary *)options callback:(WXModuleCallback)callback
{
    NSArray *items = @[];
    NSInteger index = 0 ;
    if (options[@"items"]) {
        items = options[@"items"];
    }
    NSString *title = @"";
    NSString *message = @"";
    if (options[@"title"]) {
        title = [WXConvert NSString:options[@"title"]];
    }
    
    if (options[@"message"]) {
        message = [WXConvert NSString:options[@"message"]];
    }
    
    UIAlertController* alert = [UIAlertController alertControllerWithTitle:title
                                                                   message:message
                                                            preferredStyle:UIAlertControllerStyleActionSheet];
    for(NSDictionary *dict in items) {
        NSString *message = @"";
        NSInteger type = 0;
        if(dict[@"message"]) {
            message = [WXConvert NSString:dict[@"message"]];
        }
        if(dict[@"type"]) {
            type = [WXConvert NSInteger:dict[@"type"]];
        }
        UIAlertAction *action = [UIAlertAction actionWithTitle:message style:type handler:^(UIAlertAction * _Nonnull action) {
            for (int i = 0;i < [alert.actions count];i++) {
                if(action == alert.actions[i]) {
                    NSMutableDictionary *dict = @{@"index":@(i),@"message":action.title};
                    callback(@{@"result":@"success",@"data":dict});
                }
            }
        }];
        [alert addAction:action];
    }
    
    
    [[[UIApplication sharedApplication] keyWindow] endEditing:YES];  //hide keyboard
    UIWindow *window = [UIApplication sharedApplication].keyWindow;
    [window.rootViewController presentViewController:alert animated:YES completion:nil];
}

@end
