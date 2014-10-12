package org.cocos2dx.android;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import com.makeapp.game.flappy.R;
import org.cocos2dx.lib.Cocos2dMainActivity;
import org.cocos2dx.lib.Cocos2dxLocalStorage;

public class AndroidMainActivity extends Activity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        startActivity(new Intent(AndroidMainActivity.this, Cocos2dMainActivity.class));


    }
}
