package com.keeper;

import com.facebook.react.ReactActivity;
import android.os.Bundle; // react-native-screens

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "keeper";
  }

  /**
   * configuration for react-native-screens
   */
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(null);
  }
}
