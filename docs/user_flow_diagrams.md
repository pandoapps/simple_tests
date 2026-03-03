```xml
<mxfile host="app.diagrams.net" modified="2023-11-20T10:00:00.000Z" agent="Jony" etag="my-unique-etag" version="21.8.2" type="atlas">
  <diagram id="PomodoroAppCoreFlow" name="Pomodoro App Core Flow">
    <mxGraphModel dx="1434" dy="1500" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="850" pageHeight="1100" math="0" shadow="0">
      <root>
        <mxCell id="0" />
        <mxCell id="1" parent="0" />

        <!-- Initial State -->
        <mxCell id="start" value="App Launch" style="ellipse;whiteSpace=wrap;html=1;fillColor=#dae8fc;strokeColor=#6c8ebf;" vertex="1" parent="1">
          <mxGeometry x="370" y="50" width="100" height="40" as="geometry" />
        </mxCell>

        <!-- Main Timer Screen - Idle/Initial State -->
        <mxCell id="idle" value="Main Timer (Idle)" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#d5e8d4;strokeColor=#82b366;" vertex="1" parent="1">
          <mxGeometry x="350" y="140" width="140" height="60" as="geometry" />
        </mxCell>

        <!-- Work Session States -->
        <mxCell id="workActive" value="Work Session (Active)" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#fff2cc;strokeColor=#d6b656;" vertex="1" parent="1">
          <mxGeometry x="350" y="270" width="140" height="60" as="geometry" />
        </mxCell>
        <mxCell id="workPaused" value="Work Session (Paused)" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#fff2cc;strokeColor=#d6b656;" vertex="1" parent="1">
          <mxGeometry x="550" y="270" width="140" height="60" as="geometry" />
        </mxCell>

        <!-- Break Session States -->
        <mxCell id="shortBreakActive" value="Short Break (Active)" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#e1d5e7;strokeColor=#9673a6;" vertex="1" parent="1">
          <mxGeometry x="350" y="440" width="140" height="60" as="geometry" />
        </mxCell>
        <mxCell id="shortBreakPaused" value="Short Break (Paused)" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#e1d5e7;strokeColor=#9673a6;" vertex="1" parent="1">
          <mxGeometry x="550" y="440" width="140" height="60" as="geometry" />
        </mxCell>

        <mxCell id="longBreakActive" value="Long Break (Active)" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#f8cecc;strokeColor=#b85450;" vertex="1" parent="1">
          <mxGeometry x="350" y="610" width="140" height="60" as="geometry" />
        </mxCell>
        <mxCell id="longBreakPaused" value="Long Break (Paused)" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#f8cecc;strokeColor=#b85450;" vertex="1" parent="1">
          <mxGeometry x="550" y="610" width="140" height="60" as="geometry" />
        </mxCell>

        <!-- Settings Flow -->
        <mxCell id="settings" value="Settings Screen" style="shape=parallelogram;perimeter=parallelogramPerimeter;whiteSpace=wrap;html=1;fixedSize=1;fillColor=#f0a30a;fontColor=#000000;strokeColor=#BD7000;" vertex="1" parent="1">
          <mxGeometry x="780" y="380" width="140" height="60" as="geometry" />
        </mxCell>
        <mxCell id="saveSettings" value="Save Settings" style="ellipse;whiteSpace=wrap;html=1;fillColor=#d5e8d4;strokeColor=#82b366;" vertex="1" parent="1">
          <mxGeometry x="800" y="500" width="100" height="40" as="geometry" />
        </mxCell>
        <mxCell id="cancelSettings" value="Cancel Settings" style="ellipse;whiteSpace=wrap;html=1;fillColor=#f8cecc;strokeColor=#b85450;" vertex="1" parent="1">
          <mxGeometry x="800" y="560" width="100" height="40" as="geometry" />
        </mxCell>

        <!-- Notifications -->
        <mxCell id="desktopNotification" value="Desktop Notification" style="html=1;shape=ext;fillColor=#dae8fc;strokeColor=#6c8ebf;ext=triangle;" vertex="1" parent="1">
          <mxGeometry x="100" y="350" width="100" height="40" as="geometry" />
        </mxCell>
        <mxCell id="audibleNotification" value="Audible Alert" style="html=1;shape=note;whiteSpace=wrap;fillColor=#e1d5e7;strokeColor=#9673a6;" vertex="1" parent="1">
          <mxGeometry x="100" y="400" width="100" height="40" as="geometry" />
        </mxCell>

        <!-- Edges (Transitions) -->
        <mxCell id="edge1" value="Load &amp; Display" style="edgeStyle=orthogonalEdgeStyle;html=1;jettySize=auto;orthogonalLoop=1;exitX=0.5;exitY=1;entryX=0.5;entryY=0;" edge="1" parent="1" source="start" target="idle">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>

        <mxCell id="edge2" value="[Start] Click" style="edgeStyle=orthogonalEdgeStyle;html=1;jettySize=auto;orthogonalLoop=1;exitX=0.5;exitY=1;entryX=0.5;entryY=0;" edge="1" parent="1" source="idle" target="workActive">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>

        <!-- Work Session Transitions -->
        <mxCell id="edge3" value="[Pause] Click" style="edgeStyle=orthogonalEdgeStyle;html=1;jettySize=auto;orthogonalLoop=1;exitX=1;exitY=0.5;entryX=0;entryY=0.5;" edge="1" parent="1" source="workActive" target="workPaused">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>
        <mxCell id="edge4" value="[Resume] Click" style="edgeStyle=orthogonalEdgeStyle;html=1;jettySize=auto;orthogonalLoop=1;exitX=0;exitY=0.5;entryX=1;entryY=0.5;" edge="1" parent="1" source="workPaused" target="workActive">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>

        <mxCell id="edge5" value="[Reset Session] Click" style="edgeStyle=orthogonalEdgeStyle;html=1;jettySize=auto;orthogonalLoop=1;curved=1;" edge="1" parent="1" source="workActive" target="workActive">
          <mxGeometry relative="1" as="geometry">
            <mxPoint x="320" y="290" as="sourcePoint" />
            <mxPoint x="320" y="290" as="targetPoint" />
            <Array as="points">
              <mxPoint x="300" y="290" />
              <mxPoint x="300" y="320" />
              <mxPoint x="350" y="320" />
            </Array>
          </mxGeometry>
        </mxCell>
         <mxCell id="edge5b" value="[Reset Session] Click" style="edgeStyle=orthogonalEdgeStyle;html=1;jettySize=auto;orthogonalLoop=1;" edge="1" parent="1" source="workPaused" target="workActive">
          <mxGeometry relative="1" as="geometry">
            <mxPoint x="620" y="270" as="sourcePoint" />
            <mxPoint x="490" y="270" as="targetPoint" />
            <Array as="points">
              <mxPoint x="620" y="240" />
              <mxPoint x="420" y="240" />
            </Array>
          </mxGeometry>
        </mxCell>
        <mxCell id="edgeResetCycleWorkActive" value="[Reset Cycle] Click" style="edgeStyle=orthogonalEdgeStyle;html=1;jettySize=auto;orthogonalLoop=1;" edge="1" parent="1" source="workActive" target="idle">
          <mxGeometry relative="1" as="geometry">
            <mxPoint x="350" y="300" as="sourcePoint" />
            <Array as="points">
              <mxPoint x="330" y="300" />
              <mxPoint x="330" y="170" />
              <mxPoint x="350" y="170" />
            </Array>
          </mxGeometry>
        </mxCell>
        <mxCell id="edgeResetCycleWorkPaused" value="[Reset Cycle] Click" style="edgeStyle=orthogonalEdgeStyle;html=1;jettySize=auto;orthogonalLoop=1;" edge="1" parent="1" source="workPaused" target="idle">
          <mxGeometry relative="1" as="geometry">
            <mxPoint x="550" y="300" as="sourcePoint" />
            <Array as="points">
              <mxPoint x="530" y="300" />
              <mxPoint x="530" y="170" />
              <mxPoint x="490" y="170" />
            </Array>
          </mxGeometry>
        </mxCell>

        <!-- Work to Short Break Transitions -->
        <mxCell id="edgeWorkToShortBreak" value="Work Session Ends (N Work &lt; Long Break Freq)" style="edgeStyle=orthogonalEdgeStyle;html=1;jettySize=auto;orthogonalLoop=1;" edge="1" parent="1" source="workActive" target="shortBreakActive">
          <