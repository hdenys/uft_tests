Option Explicit

'WpfWindow("Micro Focus MyFlight Sample").WpfEdit("agentName").Set Parameter.Item("username_a")
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("agentName").Set Parameter.Item("username_a")
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("password").Set Parameter.Item("password_a")

WpfWindow("Micro Focus MyFlight Sample").WpfButton("OK").Click
WpfWindow("Micro Focus MyFlight Sample").Close
