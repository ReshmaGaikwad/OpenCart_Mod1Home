Services.StartTransaction "Tr_Home"

mrowcount=datatable.GetSheet("Action1").GetRowcount
'msgbox mrowcount
For i = 1 To mrowcount Step 1
	Datatable.SetCurrentRow(i)
	Modexe=Datatable("Moduleexe","Action1")
	'msgbox Modexe
	If Modexe="Y" Then
		Modid=Datatable("ModuleID","Action1")
		ModName=Datatable("ModuleName","Action1")
		msgbox Modid
		msgbox ModName
		trowcount=datatable.GetSheet("Action2").GetRowCount
		'msgbox trowcount
		For j = 1 To trowcount Step 1
			Datatable.SetCurrentRow(j)
			If Modid=Datatable("ModuleID","Action2") and Datatable("Testcaseexe","Action2")="Y" Then
				testcaseid=Datatable("TestcaseId","Action2")
				'msgbox testcaseid	
		
			tsrowcount=datatable.GetSheet("Action3").GetRowCount
		       ' msgbox tsrowcount
		        For k = 1 To tsrowcount Step 1
			    Datatable.SetCurrentRow(k)
			    If testcaseid=Datatable("TestcaseId","Action3") Then
				keyword=Datatable("Keyword","Action3")
				'msgbox keyword
				Select Case (keyword)
					       Case "M1_NB"
					       msgbox "Click on Navigation Bar"
    					     	Call OpenURL()
    						Call NavigationBar()
         					Call CloseBrowser()

        					Case "M1_STORE"
        					msgbox "Click on Store Logo"
       						Call OpenURL()
       						Call StoreLogo()
       						Call CloseBrowser()

        					Case "M1_CB"
        					msgbox "Selecting Currency Type"
       						Call OpenURL()
        					Call CurrencyBlock()
        					Call CloseBrowser()
        					
        					Case "M1_USC"
        					msgbox "Click on Shopping Cart Link"
       						Call OpenURL()
        					Call ShoppingCart()
        					Call CloseBrowser()
       					
     					       Case "M1_SC"
        					msgbox "Click on Shopping Cart Button"
        					Call OpenURL()
        					Call AddToCart()
      						Call CartButton()
      						Call CloseBrowser()
                 
         					Case "M1_USB"
         					msgbox "Search Product"
       						Call OpenURL()
        					Call SearchBox("Laptop")
       					
						Case "M1_SB"
       						sbrowcount=datatable.GetSheet("Action4").GetRowCount
						For l = 1 To sbrowcount Step 1
							datatable.SetCurrentRow(l)
	
        					Call SearchBox(datatable("ProductName","Action4"))
        					Next
        					Call CloseBrowser()
        					
        					Case "M1_UWL"
        					msgbox "Click on Wishlist Link"
      						Call OpenURL()
        					Call WishlistDisplay()
        					Call CloseBrowser()
        					
        					Case "M1_UMA"
        					msgbox "Click on My Account Link"
      						Call OpenURL()
        					Call MyAccount()
        					Call CloseBrowser()
        
        					Case "M1_MAR"
        					msgbox "Navigating to Register Page"
        					Call OpenURL()
   						Call MyAccount()
        					Browser("Your Store").Page("Your Store").Link("Register").Click
        					Call CloseBrowser()

         
       						Case "M1_MAL"
       						msgbox "Navigating to Login Page"
       						Call OpenURL()
        					Call MyAccount()
        					Browser("Your Store").Page("Your Store").Link("Login").Click
        					Call CloseBrowser()

					End Select
				End If
			Next
		End If
	Next
End If
Next

Services.EndTransaction "Tr_Home"
