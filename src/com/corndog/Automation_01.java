package com.corndog;

import org.testng.annotations.AfterClass;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Parameters;
import org.testng.annotations.Test;

import com.hp.lft.sdk.*;
import com.hp.lft.verifications.*;

import unittesting.*;
import com.hp.lft.report.*;

public class Automation_01 extends UnitTestClassBase {

    @BeforeClass
    public void beforeClass() {
    }

    @AfterClass
    public void afterClass() {
    }

    @BeforeMethod
    public void beforeMethod() {
    }

    @AfterMethod
    public void afterMethod() {
    }

    @Test
    @Parameters({"Operating_System", "Browser_Name", "Browser_Version", "Base_URL"})
    public void test_01(String os, String browserName, String browserVer, String baseUrl) throws GeneralLeanFtException, ReportException, InterruptedException {
        long id = Thread.currentThread().getId();
        System.out.println("Automation_01 test_01. Thread id is: " + id);
        Reporter.reportEvent(os, "Browser: "+browserName+" Ver: "+browserVer+" BaseUrl: "+baseUrl);
    	Thread.sleep(3000);
    }

}