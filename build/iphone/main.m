//
//  Appcelerator Titanium Mobile
//  WARNING: this is a generated file and should not be modified
//

#import <UIKit/UIKit.h>
#define _QUOTEME(x) #x
#define STRING(x) _QUOTEME(x)

NSString * const TI_APPLICATION_DEPLOYTYPE = @"production";
NSString * const TI_APPLICATION_ID = @"com.nichekreative.turnup";
NSString * const TI_APPLICATION_PUBLISHER = @"Nana Essuman";
NSString * const TI_APPLICATION_URL = @"http://www.nichekreative.com";
NSString * const TI_APPLICATION_NAME = @"Turn!Up";
NSString * const TI_APPLICATION_VERSION = @"1.20";
NSString * const TI_APPLICATION_DESCRIPTION = @"This app allows people to see the most popping places at night.";
NSString * const TI_APPLICATION_COPYRIGHT = @"2015 by Nana Essuman";
NSString * const TI_APPLICATION_GUID = @"09b29733-7f0d-4482-bf43-410be9b9465e";
BOOL const TI_APPLICATION_ANALYTICS = false;
NSString * const TI_APPLICATION_BUILD_TYPE = @"";

#ifdef TARGET_IPHONE_SIMULATOR
NSString * const TI_APPLICATION_RESOURCE_DIR = @"";
#endif

int main(int argc, char *argv[]) {
    NSAutoreleasePool * pool = [[NSAutoreleasePool alloc] init];

#ifdef __LOG__ID__
	NSArray *paths = NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES);
	NSString *documentsDirectory = [paths objectAtIndex:0];
	NSString *logPath = [documentsDirectory stringByAppendingPathComponent:[NSString stringWithFormat:@"%s.log",STRING(__LOG__ID__)]];
	freopen([logPath cStringUsingEncoding:NSUTF8StringEncoding],"w+",stderr);
	fprintf(stderr,"[INFO] Application started\n");
#endif

	int retVal = UIApplicationMain(argc, argv, nil, @"TiApp");
    [pool release];
    return retVal;
}
